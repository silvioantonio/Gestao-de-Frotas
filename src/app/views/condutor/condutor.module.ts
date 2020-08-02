import { RouterModule } from '@angular/router';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CondutorComponent } from './condutor.component';
import { LyButtonModule } from '@alyle/ui/button';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyCardModule } from '@alyle/ui/card';
import { LyMenuModule } from '@alyle/ui/menu';
import { LySelectModule } from '@alyle/ui/select';
import { LyFieldModule } from '@alyle/ui/field';
import { LyGridModule } from '@alyle/ui/grid';
import { LyListModule } from '@alyle/ui/list';
import { LyDividerModule } from '@alyle/ui/divider';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgModule } from '@angular/core';
import { CondutorService } from './../../components/condutor/condutor.service';
import { DeleteCondutorComponent } from './delete/delete.component';
import { UpdateCondutorComponent } from './update/update.component';
import { ReadCondutorComponent } from './read/read.component';
import { CreateCondutorComponent } from './create/create.component';

import { LyThemeModule, LyCommonModule, StyleRenderer, LyTheme2, LY_THEME_NAME, LY_THEME } from '@alyle/ui';
import { LyIconModule } from '@alyle/ui/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MinimaDark } from '@alyle/ui/themes/minima';

import { CondutorRoutingModule } from "./condutor.routing.module";

@NgModule({
  imports: [
    CondutorRoutingModule,
    RouterModule,
    BrowserModule,
    HammerModule,
    FormsModule,
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    LyIconModule,
    LyThemeModule,
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
  ],
  exports: [],
  declarations: [
    CondutorComponent,
    CreateCondutorComponent,
    ReadCondutorComponent,
    UpdateCondutorComponent,
    DeleteCondutorComponent
  ],
  providers: [CondutorService,StyleRenderer, LyTheme2,
    { provide: LY_THEME_NAME, useValue: 'minima-dark' },
    { provide: LY_THEME, useClass: MinimaDark, multi: true }
  ],
})
export class CondutorModule { }
