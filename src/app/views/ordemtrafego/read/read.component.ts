import { OrdemDataSource } from '../../../components/ordemdetrafego/ordem-datasource';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { LyIconService } from '@alyle/ui/icon';
import { Ordem } from "../../../components/ordemdetrafego/ordem.model";
import { OrdemService } from "../../../components/ordemdetrafego/ordem.service";

import {MatTableDataSource} from '@angular/material/table';

const STYLES = (_theme: ThemeVariables) => ({
  icon: {
    marginAfter: '.5em'
  }
});

@Component({
  selector: 'app-read-ordem',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadOrdemComponent implements AfterViewInit, OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Ordem>;

  readonly classes = this._theme.addStyleSheet(STYLES);

  dataSource: OrdemDataSource;

  nome: string;

  displayedColumns = ['id', 'origem', 'destino', 'dataDaViagem', 'horaDaViagem',
                      'status', 'distanciaPercorrida', 'nomeCondutor','action'];

  constructor(
    private ordemService: OrdemService,
    private _theme: LyTheme2,
    icon: LyIconService) {}

  ngOnInit() {
    this.dataSource = new OrdemDataSource();
  }

  ngAfterViewInit() {
    this.ordemService.read().subscribe(res => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.data = res["content"];
      this.table.dataSource = this.dataSource;
    });
  }

  evento() {
    if(this.nome != "") {
      this.dataSource.data = this.dataSource.data.filter(res => {
        return res.condutor.nome.toLowerCase().match(this.nome.trim().toLowerCase());
      });
      this.table.dataSource = this.dataSource.data;
    } else if(this.nome == "") {
      this.ngOnInit();
      this.ngAfterViewInit();
    }
  }

}
