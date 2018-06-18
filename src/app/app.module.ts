import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StatsComponent } from './stats/stats.component';
import { ControleComponent } from './controle/controle.component';
import { ToastrModule } from 'ngx-toastr';
import { MetroComponent } from './metro/metro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatsComponent,
    ControleComponent,
    MetroComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
