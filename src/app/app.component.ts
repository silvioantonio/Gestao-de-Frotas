import { AuthService } from './components/login/auth.service';
import { Component, OnInit } from '@angular/core';
import { ThemeVariables, ThemeRef, lyl, StyleRenderer } from '@alyle/ui';

const STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
  const __ = ref.selectorsOf(STYLES);
  return {
    $global: lyl `{
      body {
        background-color: ${theme.background.default}
        color: ${theme.text.default}
        font-family: ${theme.typography.fontFamily}
        margin: 0
        direction: ${theme.direction}
      }
    }`,
    root: lyl `{
      display: block
    }`
  };
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StyleRenderer]
})
export class AppComponent implements OnInit{
  readonly classes = this.sRenderer.renderSheet(STYLES, true);

  title = 'frontend';

  mostrarMenu: boolean = false;

  constructor(readonly sRenderer: StyleRenderer, private authService: AuthService) {

   }

   ngOnInit() {
      this.authService.mostrarMenuEmitter.subscribe((mostrar: boolean) => this.mostrarMenu = mostrar);
   }

}
