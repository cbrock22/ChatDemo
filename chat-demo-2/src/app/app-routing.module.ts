import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/chat-demo/first', pathMatch: 'full'},
  {path: 'chat-demo', loadChildren: () => import('./comps/chat-demo.module').then(m => m.ChatDemoModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
