import { VeiculoService } from './../../../components/veiculo/veiculo.service';
import { Veiculo } from './../../../components/veiculo/veiculo.model';
import { ReadDataSource } from "./../../../components/veiculo/veiculo-datasource";
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
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

  readonly classes = this._theme.addStyleSheet(STYLES);

  dataSource: ReadDataSource;
  placa: string;

  displayedColumns = ['modelo', 'placa', 'cor', 'km', 'anoFabricacao', 'marca', 'categoria', 'tipoCombustivel', 'estadoConservacao','action']

  constructor(private veiculoService: VeiculoService, private _theme: LyTheme2,) { }

  ngOnInit(): void {this.dataSource = new ReadDataSource()}

  ngAfterViewInit() {
    this.veiculoService.read().subscribe(res => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.data = res["content"];
      this.table.dataSource = this.dataSource;
    });
  }

  evento(option: string) {
    if(this[option] != '') {
      this.table.dataSource = this.dataSource.data.filter(res => res[option].toLowerCase().match(this[option].trim().toLowerCase()));
    } else if(this[option] == ''){
      this.ngOnInit();
      this.ngAfterViewInit();
    }
  }

}
