import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log("Données du formulaire :", this.formData);

    alert(`Merci ${this.formData.name}, votre message a été envoyé !`);

    // Réinitialiser le formulaire (optionnel)
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
