import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  LyCommonModule,
  LyThemeModule,
  LY_THEME,
  LY_THEME_NAME,
  StyleRenderer,
  LyTheme2
} from '@alyle/ui';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyIconModule } from '@alyle/ui/icon';
import { MinimaDark } from '@alyle/ui/themes/minima';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { LyGridModule } from '@alyle/ui/grid';
import { LyMenuModule } from '@alyle/ui/menu';
import { LyListModule } from '@alyle/ui/list';
import { LyCardModule } from '@alyle/ui/card';
import { LyDividerModule } from '@alyle/ui/divider';
import { LyFieldModule } from '@alyle/ui/field';
import { LySelectModule } from '@alyle/ui/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { NavComponent } from './components/template/nav/nav.component';
import { ContentComponent } from './components/template/content/content.component';
import { VeiculoComponent } from './views/veiculo/veiculo.component';
import { LyButtonModule } from '@alyle/ui/button';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CreateComponent } from './views/veiculo/create/create.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReadComponent } from './views/veiculo/read/read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UpdateComponent } from './views/veiculo/update/update.component';
import { DeleteComponent } from './views/veiculo/delete/delete.component';
import { CondutorComponent } from './views/condutor/condutor.component';
import { ReadCondutorComponent } from './views/condutor/read/read.component';
import { CreateCondutorComponent } from './views/condutor/create/create.component';
import { UpdateCondutorComponent } from './views/condutor/update/update.component';
import { DeleteCondutorComponent } from './views/condutor/delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ContentComponent,
    VeiculoComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    CondutorComponent,
    CreateCondutorComponent,
    ReadCondutorComponent,
    UpdateCondutorComponent,
    DeleteCondutorComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HammerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    LyCommonModule,
    LyToolbarModule,
    LyIconModule,
    LyGridModule,
    LyThemeModule,
    LyDividerModule,
    LyListModule,
    LyFieldModule,
    LySelectModule,
    LyMenuModule,
    LyButtonModule,
    LyTypographyModule,
    LyCardModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [StyleRenderer, LyTheme2,
    { provide: LY_THEME_NAME, useValue: 'minima-dark' },
    { provide: LY_THEME, useClass: MinimaDark, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
