import { Condutor } from 'src/app/components/condutor/condutor.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { LyIconService } from '@alyle/ui/icon';
import { CondutorService } from 'src/app/components/condutor/condutor.service';

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
export class UpdateCondutorComponent implements OnInit {
  condutor: Condutor

  readonly classes = this._theme.addStyleSheet(STYLES);

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

  updateCondutor(): void {
    this.condutorService.update(this.condutor).subscribe(() => {
      this.condutorService.showMessage('Condutor atualizado');
      this.router.navigate(['/condutor']);
    });
  }

  cancel(): void {
    this.router.navigate(['/condutor']);
  }

}
