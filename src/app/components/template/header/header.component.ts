import { Component, OnInit } from '@angular/core';
import { LyTheme2, shadowBuilder, ThemeVariables } from '@alyle/ui';

const styles = (theme: ThemeVariables) => ({
  item: {
    textAlign: 'center',
    background: theme.background.secondary,
    boxShadow: shadowBuilder(1),
    borderRadius: '4px',
    height: '100%'
  }
});

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  classes = this._theme.addStyleSheet(styles);

  constructor(private _theme: LyTheme2) { }

  ngOnInit(): void {
  }

}
