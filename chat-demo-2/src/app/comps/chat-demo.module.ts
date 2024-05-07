import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatDemoComponent } from './chat-demo/chat-demo.component';
import { RouterModule, Routes } from '@angular/router';
import { NbButtonModule, NbCardModule, NbChatCustomMessageDirective, NbChatModule, NbChatOptions, NbDialogModule, NbIconModule, NbTableModule, NbThemeModule } from '@nebular/theme';
import { SecondaryDemoComponent } from './secondary-demo/secondary-demo.component';

const routes: Routes = [
  {path: 'first', component: ChatDemoComponent},
  {path: 'second', component: SecondaryDemoComponent},
  {path: '', redirectTo: '/first', pathMatch: 'full'},
  //{path: '', redirectTo: '/first', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    ChatDemoComponent,
    SecondaryDemoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forRoot(),
    NbChatModule,
    NbTableModule,
    NbIconModule
  ],
  providers: [NbChatOptions],
  exports: [ RouterModule ]
})
export class ChatDemoModule { }
