import { OrdemDataSource } from '../../../components/ordemdetrafego/ordem-datasource';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { LyIconService } from '@alyle/ui/icon';
import { Ordem } from "../../../components/ordemdetrafego/ordem.model";
import { OrdemService } from "../../../components/ordemdetrafego/ordem.service";

const STYLES = (_theme: ThemeVariables) => ({
  icon: {
    marginAfter: '.5em'
  }
});

@Component({
  selector: 'app-orden-condutor',
  templateUrl: './ordens.component.html',
  styleUrls: ['./ordens.component.css']
})
export class OrdensCondutorComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Ordem>;

  readonly classes = this._theme.addStyleSheet(STYLES);

  dataSource: OrdemDataSource;

  origem: string;
  destino: string;
  id: string;

  displayedColumns = ['id', 'origem', 'destino', 'dataDaViagem', 'horaDaViagem', 'status', 'distanciaPercorrida'];

  constructor(
    private ordemService: OrdemService,
    private route: ActivatedRoute,
    private _theme: LyTheme2,
    icon: LyIconService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.dataSource = new OrdemDataSource();
  }

  ngAfterViewInit() {
    this.ordemService.readCondutorById(this.id).subscribe(res => {
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
