import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTestComponentComponent } from './my-test-component/my-test-component.component';
import { NewChatComponent } from './new-chat/new-chat.component';
import { ChatAiComponent } from './chat-ai/chat-ai.component';
import { GenerateImageComponent } from './generate-image/generate-image.component';
import { CheckGraphComponent } from './check-graph/check-graph.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';  // Importation de FormsModule ici
@NgModule({
  declarations: [
    AppComponent,
    MyTestComponentComponent,
    NewChatComponent,
    ChatAiComponent,
    GenerateImageComponent,
    CheckGraphComponent,
    SidbarComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
