import { VeiculoService } from './../../../components/veiculo/veiculo.service';
import { Veiculo, ReadDataSource } from './../../../components/veiculo/veiculo.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { LyIconService } from '@alyle/ui/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

const STYLES = (_theme: ThemeVariables) => ({
  icon: {
    marginAfter: '.5em'
  }
});


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements AfterViewInit,OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Veiculo>;
  dataSource: ReadDataSource;

  readonly classes = this._theme.addStyleSheet(STYLES);

  veiculos: Veiculo[] = []
  displayedColumns = [
    'modelo', 'placa', 'cor', 'km', 'anoFabricacao', 'marca',
    'categoria', 'tipoCombustivel', 'estadoConservacao',
    'action',
  ]

  constructor(
    private veiculoService: VeiculoService,
    private _theme: LyTheme2,
    icon: LyIconService) { }

  ngOnInit(): void {
    this.veiculoService.read().subscribe(res => this.veiculos = res["content"])
    this.dataSource = new ReadDataSource(this.veiculos)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

}
