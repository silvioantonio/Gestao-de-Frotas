import { NgModule } from '@angular/core';
import { LyThemeModule, LyCommonModule, StyleRenderer, LyTheme2, LY_THEME_NAME, LY_THEME } from '@alyle/ui';
import { LyIconModule } from '@alyle/ui/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MinimaDark } from '@alyle/ui/themes/minima';

import { VeiculoComponent } from './veiculo.component';
import { RouterModule } from '@angular/router';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyFieldModule } from '@alyle/ui/field';
import { LyMenuModule } from '@alyle/ui/menu';
import { LyButtonModule } from '@alyle/ui/button';
import { VeiculoService } from 'src/app/components/veiculo/veiculo.service';
import { ReadComponent } from './read/read.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LyGridModule } from '@alyle/ui/grid';
import { LyDividerModule } from '@alyle/ui/divider';
import { LyListModule } from '@alyle/ui/list';
import { LySelectModule } from '@alyle/ui/select';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyCardModule } from '@alyle/ui/card';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
    imports: [
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
    declarations: [VeiculoComponent, ReadComponent, CreateComponent, UpdateComponent, DeleteComponent],
    providers: [VeiculoService, StyleRenderer, LyTheme2,
        { provide: LY_THEME_NAME, useValue: 'minima-dark' },
        { provide: LY_THEME, useClass: MinimaDark, multi: true }
      ],
})
export class VeiculoModule { }
