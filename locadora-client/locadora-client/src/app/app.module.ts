import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Adicionado Manualmente
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Adicionado
import { MarcaService } from './services/marca.service';
import { MarcaComponent } from './marca/marca.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MarcaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
