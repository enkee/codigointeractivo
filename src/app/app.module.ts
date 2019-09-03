import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatoNombrePipe } from './formato-nombre.pipe';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'body', component: BodyComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header/:id', component: HeaderComponent },
  { path: 'body/:id/:titulo', component: BodyComponent },
  { path: '**', component: PrincipalComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    FormatoNombrePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
