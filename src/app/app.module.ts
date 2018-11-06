import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatSortModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
