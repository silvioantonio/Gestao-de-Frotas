import { Condutor } from './../../../components/condutor/condutor.model';
import { CondutorService } from './../../../components/condutor/condutor.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { LyIconService } from '@alyle/ui/icon';


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
export class DeleteCondutorComponent implements OnInit {

  readonly classes = this._theme.addStyleSheet(STYLES);

  condutor: Condutor;

  constructor(
    private condutorService: CondutorService,
    private router: Router,
    private route: ActivatedRoute,
    private _theme: LyTheme2,
    icon: LyIconService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.condutorService.readById(id).subscribe( condutor => {
      this.condutor = condutor;
    });
  }

  deleteCondutor(): void{
    this.condutorService.delete(this.condutor.id).subscribe(() =>{
      this.condutorService.showMessage('Condutor escluido!')
      this.router.navigate(['/condutor'])
    })
  }

  cancel(): void {
    this.router.navigate(['/condutor']);
  }

}
