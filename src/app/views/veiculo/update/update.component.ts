import { VeiculoService } from './../../../components/veiculo/veiculo.service';
import { Component, OnInit } from '@angular/core';
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
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

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
    this.veiculoService.readById(parseInt(id)).subscribe( veiculo => {
      this.veiculo = veiculo;
    });
  }

  updateVeiculo(): void {
    this.veiculoService.update(this.veiculo).subscribe(() => {
      this.veiculoService.showMessage('Veiculo atualizado');
      this.router.navigate(['/veiculos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/veiculos']);
  }

}
