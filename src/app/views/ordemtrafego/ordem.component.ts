import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem',
  templateUrl: './ordem.component.html',
  styleUrls: ['./ordem.component.css']
})
export class OrdemComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToOrdemCreate(): void {
    this.router.navigate(['/ordem/create'])
  }

}
