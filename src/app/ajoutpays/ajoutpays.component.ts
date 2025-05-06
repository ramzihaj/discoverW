import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaysService } from '../services/pays.service';

@Component({
  selector: 'app-ajoutpays',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ajoutpays.component.html',
  styleUrl: './ajoutpays.component.css'
})
export class AjoutpaysComponent {
  imagePreview: string | ArrayBuffer | null = null;
  paysForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private paysService: PaysService,
    private router: Router
  ) {
    this.paysForm = this.fb.group({
      id: ['', [Validators.required, Validators.min(1)]],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      continent: ['', Validators.required],
      meilleurSiteTouristique: ['', [Validators.required, Validators.minLength(3)]], // Nouveau champ
      image: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.paysForm.valid) {
      this.isLoading = true;

      const newPays = this.paysForm.value;
      this.paysService.addPays(newPays);

      setTimeout(() => {
        this.paysForm.reset();
        this.imagePreview = null;
        this.isLoading = false;
        this.router.navigate(['/']);
      }, 1000);
    }
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.paysForm.patchValue({
          image: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  }
}
