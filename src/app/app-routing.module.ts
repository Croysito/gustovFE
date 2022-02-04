import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatoComponent } from './pages/plato/plato.component';
import { MenuComponent } from './pages/menu/menu.component';
import { VentaComponent } from './pages/venta/venta.component';
import { PlatosComponent } from './pages/platos/platos.component';
import { MenusComponent } from './pages/menus/menus.component';
import { VentasComponent } from './pages/ventas/ventas.component';

export const routes: Routes = [
  { path: 'platos', component: PlatosComponent },
  { path: 'plato/:id', component: PlatoComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'menu/:id', component: MenuComponent },
  { path: 'ventas', component: VentaComponent },
  { path: 'venta/:id', component: VentasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'platos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
