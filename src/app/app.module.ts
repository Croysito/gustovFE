import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatosComponent } from './pages/platos/platos.component';
import { PlatoComponent } from './pages/plato/plato.component';
import { MenusComponent } from './pages/menus/menus.component';
import { MenuComponent } from './pages/menu/menu.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { VentaComponent } from './pages/venta/venta.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './pages/header/header.component';
import { RouterModule, ROUTES } from '@angular/router';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PlatosComponent,
    PlatoComponent,
    MenusComponent,
    MenuComponent,
    VentasComponent,
    VentaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot( routes, {useHash:true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
