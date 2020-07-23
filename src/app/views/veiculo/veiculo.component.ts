import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExportaService } from 'src/app/components/util/exporta.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  constructor(private router: Router,  private exportaService: ExportaService) { }

  ngOnInit(): void {
  }

  navigateToVeiculoCreate(): void {
    this.router.navigate(['/veiculos/create'])
  }


  export(): void{ this.exportaService.converteParaCSV('tabela-veiculo', 'Tabela-Veiculo') }

}
