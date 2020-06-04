import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { LyIconService } from '@alyle/ui/icon';
import { Condutor } from 'src/app/components/condutor/condutor.model';
import { CondutorService } from 'src/app/components/condutor/condutor.service';

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
export class ReadCondutorComponent implements OnInit {

  readonly classes = this._theme.addStyleSheet(STYLES);

  condutores: Condutor[] = []

  displayedColumns = [
    'nome', 'cpf', 'matricula', 'numeroCNH', 'validade', 'categoriaCnh',
    'cidade', 'bairro', 'complemento','numero','action'
  ]

  constructor(
    private http: HttpClient,
    private condutorService: CondutorService,
    private _theme: LyTheme2,
    icon: LyIconService) { }

  ngOnInit(): void {
    this.condutorService.read().subscribe(res => {
      this.condutores = res["content"]

      console.log(this.condutores)

    })
  }
}
