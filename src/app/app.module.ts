import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { NuevoFiltroPipe } from './nuevo-filtro.pipe';
import { FrutaComponent } from './fruta/fruta.component';
import { VerdurachonitaComponent } from './verdurachonita/verdurachonita.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent,
    NuevoFiltroPipe,
    FrutaComponent,
    VerdurachonitaComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
