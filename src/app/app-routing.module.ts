import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige la ruta raíz a '/login'
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
