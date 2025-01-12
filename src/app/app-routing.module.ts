import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewChatComponent } from './new-chat/new-chat.component';
import { GenerateImageComponent } from './generate-image/generate-image.component';
import { ChatAiComponent } from './chat-ai/chat-ai.component';
import { CheckGraphComponent } from './check-graph/check-graph.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [

  { path: 'chat', component: NewChatComponent },
  { path: 'image', component: GenerateImageComponent },
  { path: 'graph', component: CheckGraphComponent },
  { path: 'aichat', component: ChatAiComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: NewChatComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
