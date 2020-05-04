import { NgModule } from '@angular/core';
import {
  MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule,
  MatFormFieldModule, MatInputModule,  MatTableModule,
  MatListModule,
  MatExpansionModule,
  MatSortModule,
  MatPaginatorModule,MatSelectModule
} from '@angular/material';


@NgModule({
  imports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule,
    MatFormFieldModule, MatInputModule,  MatTableModule, MatListModule,
    MatExpansionModule,
    MatSortModule,
    MatPaginatorModule, MatSelectModule],
  exports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule,
    MatFormFieldModule, MatInputModule,  MatTableModule, MatListModule,
    MatExpansionModule,
    MatSortModule,
    MatPaginatorModule, MatSelectModule],
})
export class MaterialModule { }
