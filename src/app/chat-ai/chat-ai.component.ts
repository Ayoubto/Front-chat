import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Importation du CommonModule
@Component({
  selector: 'app-chat-ai',
  templateUrl: './chat-ai.component.html',
  styleUrl: './chat-ai.component.css'
})
export class ChatAiComponent {
  messages = [
    { sender: 'user', text: 'What are the security protocols?', timestamp: '10:00 AM' },
    { sender: 'ai', text: 'Security protocols include multi-factor authentication and data encryption.', timestamp: '10:01 AM' },
    { sender: 'user', text: 'Can you explain more about data encryption?', timestamp: '10:02 AM' },
    { sender: 'ai', text: 'Data encryption ensures that sensitive data is secure both in transit and at rest.', timestamp: '10:03 AM' }
  
  ];


  chatForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisation du formulaire avec FormBuilder
    this.chatForm = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  // Méthode pour soumettre le formulaire
  onSubmit(): void {
    if (this.chatForm.valid) {
      console.log(this.chatForm.value);
    } else {
      console.error('Le formulaire est invalide');
    }
  }
}
