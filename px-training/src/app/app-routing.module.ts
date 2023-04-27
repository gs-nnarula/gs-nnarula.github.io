import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/services/auth.guard';


const routes: Routes = [
  { path: "login", loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: "", loadChildren: () => import('./modules/px/px.module').then(m => m.PxModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
