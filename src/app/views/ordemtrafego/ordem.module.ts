import { NgModule } from '@angular/core';

import { OrdemComponent } from './ordem.component';
import { ReadOrdemComponent } from './read/read.ordem.component';
import { RouterModule } from '@angular/router';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { LyIconModule } from '@alyle/ui/icon';
import { LyThemeModule, LyCommonModule, StyleRenderer, LyTheme2, LY_THEME_NAME, LY_THEME } from '@alyle/ui';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyGridModule } from '@alyle/ui/grid';
import { LyDividerModule } from '@alyle/ui/divider';
import { LyListModule } from '@alyle/ui/list';
import { LyFieldModule } from '@alyle/ui/field';
import { LySelectModule } from '@alyle/ui/select';
import { LyMenuModule } from '@alyle/ui/menu';
import { LyButtonModule } from '@alyle/ui/button';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyCardModule } from '@alyle/ui/card';
import { OrdemService } from 'src/app/components/ordemdetrafego/ordem.service';
import { MinimaDark } from '@alyle/ui/themes/minima';
import { CreateOrdemComponent } from './create/create.ordem.component';
import { OrdemRoutingModule } from './ordem.routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
    imports: [
        OrdemRoutingModule,
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
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [],
    declarations: [OrdemComponent, ReadOrdemComponent, CreateOrdemComponent],
    providers: [OrdemService, StyleRenderer, LyTheme2,
        { provide: LY_THEME_NAME, useValue: 'minima-dark' },
        { provide: LY_THEME, useClass: MinimaDark, multi: true }
      ],
})
export class OrdemModule { }
