import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaysService } from '../services/pays.service';


@Component({
  selector: 'app-edit-pays',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-pays.component.html',
  styleUrl: './edit-pays.component.css'
})
export class EditPaysComponent implements OnInit {
  imagePreview: string | ArrayBuffer | null = null;
  paysForm: FormGroup;
  isLoading = false;
  paysId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private paysService: PaysService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.paysForm = this.fb.group({
      id: [{ value: '', disabled: true }, Validators.required],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      continent: ['', Validators.required],
      visiteurs: [0, [Validators.required, Validators.min(0)]],
      langues: ['', Validators.required],
      meilleurSiteTouristique: ['', [Validators.required, Validators.minLength(3)]], // Nouveau champ
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.paysId = this.route.snapshot.paramMap.get('id');
    if (this.paysId) {
      const pays = this.paysService.getPaysById(this.paysId);
      if (pays) {
        this.paysForm.patchValue({
          id: pays.id,
          nom: pays.nom,
          description: pays.description,
          continent: pays.continent,
          visiteurs: pays.visiteurs,
          langues: pays.langues.join(', '),
          meilleurSiteTouristique: pays.meilleurSiteTouristique, // Charger le champ
          image: pays.image
        });
        this.imagePreview = pays.image;
      }
    }
  }

  onSubmit(): void {
    if (this.paysForm.valid && this.paysId) {
      this.isLoading = true;
      const updatedPays = {
        id: this.paysId,
        nom: this.paysForm.get('nom')?.value,
        description: this.paysForm.get('description')?.value,
        continent: this.paysForm.get('continent')?.value,
        visiteurs: this.paysForm.get('visiteurs')?.value,
        langues: this.paysForm.get('langues')?.value.split(',').map((lang: string) => lang.trim()),
        meilleurSiteTouristique: this.paysForm.get('meilleurSiteTouristique')?.value, // Mettre à jour le champ
        image: this.paysForm.get('image')?.value
      };

      this.paysService.updatePays(this.paysId, updatedPays);

      setTimeout(() => {
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
