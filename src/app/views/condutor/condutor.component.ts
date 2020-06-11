import { ExportaService } from './../../components/util/exporta.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-condutor',
  templateUrl: './condutor.component.html',
  styleUrls: ['./condutor.component.css']
})
export class CondutorComponent implements OnInit {

  constructor(private router: Router, private exportaService: ExportaService) { }

  ngOnInit(): void {
  }

  navigateToCondutorCreate(): void {
    this.router.navigate(['/condutor/create'])
  }

  export(): void{ this.exportaService.converteParaCSV('tabela-condutor', 'Tabela-Condutor') }

}
