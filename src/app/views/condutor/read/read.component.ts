import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { Condutor } from '../../../components/condutor/condutor.model';
import { CondutorService } from '../../../components/condutor/condutor.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { CondutorDataSource } from '../../../components/condutor/condutor-datasource';

const STYLES = (_theme: ThemeVariables) => ({
  icon: {
    marginAfter: '.5em'
  }
});

@Component({
  selector: 'app-read-condutor',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadCondutorComponent implements AfterViewInit,OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Condutor>;

  readonly classes = this._theme.addStyleSheet(STYLES);

  dataSource: CondutorDataSource;
  nome: string;
  cpf: string;
  matricula: number;
  cnh:number;

  displayedColumns = ['nome', 'cpf', 'matricula', 'numeroCNH', 'validade', 'categoriaCnh', 'cidade', 'bairro', 'complemento','numero','action']

  constructor(private condutorService: CondutorService, private _theme: LyTheme2) { }

    ngOnInit() { this.dataSource = new CondutorDataSource(); }

    ngAfterViewInit() {
      this.condutorService.read().subscribe(res => {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.dataSource.data = res["content"];
        this.table.dataSource = this.dataSource;
      });
    }

    evento(option: any) {
      if(this[option] != '') {
        this.table.dataSource = this.dataSource.data.filter(res => {
          if(typeof res[option] == 'string')
            return res[option].toLowerCase().match(this[option].trim().toLowerCase())
          else
            return res[option].toString().match(this[option].toString().trim())
        });
      } else if(this[option] == ''){
        this.ngOnInit();
        this.ngAfterViewInit();
      }
    }

}
