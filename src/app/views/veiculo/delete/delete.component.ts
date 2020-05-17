import { Component, OnInit } from '@angular/core';
import { VeiculoService } from './../../../components/veiculo/veiculo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { LyIconService } from '@alyle/ui/icon';
import { Veiculo } from 'src/app/components/veiculo/veiculo.model';

const STYLES = (_theme: ThemeVariables) => ({
  icon: {
    marginAfter: '.5em'
  }
});

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  veiculo: Veiculo

  readonly classes = this._theme.addStyleSheet(STYLES);

  constructor(
    private veiculoService: VeiculoService,
    private router: Router,
    private route: ActivatedRoute,
    private _theme: LyTheme2,
    icon: LyIconService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.veiculoService.readById(id).subscribe( veiculo => {
      this.veiculo = veiculo;
    });
  }

  deleteVeiculo(): void{
    this.veiculoService.delete(this.veiculo.id).subscribe(() =>{
      this.veiculoService.showMessage('Veiculo escluido!')
      this.router.navigate(['/veiculos'])
    })
  }

  cancel(): void {
    this.router.navigate(['/veiculos']);
  }

}
