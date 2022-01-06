import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },

  {path: 'contacto', loadChildren: () =>
  import ( './contacto/contacto.module').then( (m) => m.ContactoModule )
},

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( (m) => m.HomeModule ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
