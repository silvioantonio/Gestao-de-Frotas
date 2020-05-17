import { Veiculo } from './../../../components/veiculo/veiculo.model';
import { VeiculoService } from './../../../components/veiculo/veiculo.service';
import { Component, OnInit } from '@angular/core';
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
export class CreateComponent implements OnInit {

  veiculo: Veiculo = {
    anoFabricacao: null,
    categoria: '',
    cor: '',
    estadoConservacao: '',
    km: null,
    marca: '',
    modelo: '',
    placa: '',
    tipoCombustivel: ''
  }

  readonly classes = this._theme.addStyleSheet(STYLES);

  constructor(
    private veiculoService: VeiculoService,
    private router: Router,
    private _theme: LyTheme2,
    icon: LyIconService
    ) { }

  ngOnInit(): void {

  }

  createVeiculo(): void {
    this.veiculoService.create(this.veiculo).subscribe( () => {
      this.veiculoService.showMessage('Veiculo criado!')
      this.router.navigate(['/veiculos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/veiculos'])
  }

}
