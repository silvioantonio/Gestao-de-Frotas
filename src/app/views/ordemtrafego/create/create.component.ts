import { VeiculoService } from './../../../components/veiculo/veiculo.service';
import { Veiculo } from 'src/app/components/veiculo/veiculo.model';
import { Condutor } from 'src/app/components/condutor/condutor.model';
import { CondutorService } from 'src/app/components/condutor/condutor.service';
import { Ordem } from './../../../components/ordemdetrafego/ordem.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { LyIconService } from '@alyle/ui/icon';
import { OrdemService } from 'src/app/components/ordemdetrafego/ordem.service';


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
export class CreateOrdemComponent implements OnInit {

  ordem: Ordem = {
    origem: '',
    destino: '',
    veiculo: {
      anoFabricacao: null,
      categoria: '',
      cor: '',
      estadoConservacao: '',
      km: null,
      marca: '',
      modelo: '',
      placa: '',
      tipoCombustivel: '',
    },
    condutor: {
      cnh: {
        categoriaCnh: '',
        numeroCNH: null,
        validade: ''
      },
      endereco: {
        bairro: '',
        cidade: '',
        complemento: '',
        numero: null
      },
      cpf: '',
      matricula: null,
      nome: ''
    },
    dataDaViagem: '',
    horaDaViagem: '',
    status: '',
    distanciaPercorrida: null
  }

  readonly classes = this._theme.addStyleSheet(STYLES);

  constructor(
    private condutorService: CondutorService,
    private veiculoService: VeiculoService,
    private ordemService: OrdemService,
    private router: Router,
    private _theme: LyTheme2,
    icon: LyIconService
  ) { }

  ngOnInit(): void {
  }

  createCondutor(): void {
    this.ordemService.create( () => {
      let condutor: Condutor;
      let veiculo: Veiculo;

      this.condutorService.readByMatricula(this.ordem.condutor.matricula).subscribe( res => {condutor = res} );
      this.veiculoService.readById(this.ordem.veiculo.id).subscribe( res => {veiculo = res} );

      this.ordem.condutor = condutor;
      this.ordem.veiculo = veiculo;

      return this.ordem;
    }).subscribe( () => {
      this.ordemService.showMessage('Ordem de Trafego cadastrado!')
      this.router.navigate(['/ordem'])
    });
  }

  cancel(): void {
    this.router.navigate(['/ordem'])
  }

}
