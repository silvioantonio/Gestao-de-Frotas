import { Component, OnInit } from '@angular/core';
import { CondutorService } from './../../../components/condutor/condutor.service';
import { Condutor } from './../../../components/condutor/condutor.model';
import { Router } from '@angular/router';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { LyIconService } from '@alyle/ui/icon';

const STYLES = (_theme: ThemeVariables) => ({
  icon: {
    marginAfter: '.5em'
  }
});

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateCondutorComponent implements OnInit {
  condutor: Condutor = {
    nome: '',
    cpf: '',
    matricula: null,
    cnh:{
      numeroCNH: null,
      validade: '',
      categoriaCnh: ''},
    endereco:{
      cidade: '',
      bairro: '',
      complemento: '',
      numero: ''}

  }

  readonly classes = this._theme.addStyleSheet(STYLES);

  constructor(
    private condutorService: CondutorService,
    private router: Router,
    private _theme: LyTheme2,
    icon: LyIconService
    ) { }

  ngOnInit(): void {

  }

  createCondutor(): void {
    this.condutorService.create(this.condutor).subscribe( () => {
      this.condutorService.showMessage('Condutor cadastrado!')
      this.router.navigate(['/condutor'])
    })
  }

  cancel(): void {
    this.router.navigate(['/condutor'])
  }
}
