import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { AppRoutingModule } from "./app.routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDialogRef,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MAT_DIALOG_DATA,
} from "@angular/material";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PostListComponent } from "./components/post-list/post.list.component";
import { PostFormComponent } from "./components/post-form/post.form.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { PostService } from "./services/post.service";
import { HttpClientModule } from "@angular/common/http";
import { DeleteConfirmComponent } from "./components/delete-confirm/delete.confirm.component";
import { EditConfirmComponent } from "./components/edit-confirm/edit.confirm.component";

@NgModule({
  declarations: [
    // Componentes
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    PostListComponent,
    PostFormComponent,
    DeleteConfirmComponent,
    EditConfirmComponent,
  ],
  imports: [
    // Modulos
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  entryComponents: [DeleteConfirmComponent, EditConfirmComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
