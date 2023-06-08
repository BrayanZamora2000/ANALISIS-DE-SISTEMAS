import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ModulopersonasComponent } from './modulopersonas/modulopersonas.component';
import { InsertapersonaComponent } from './insertapersona/insertapersona.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'persona', component: ModulopersonasComponent},
  { path: 'inpersonas', component: InsertapersonaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
