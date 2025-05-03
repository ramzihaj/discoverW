import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PaysService } from '../services/pays.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pays-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './pays-details.component.html',
  styleUrl: './pays-details.component.css'
})
export class PaysDetailsComponent implements OnInit {
  pays: any;

  constructor(private route: ActivatedRoute, private paysService: PaysService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pays = this.paysService.getPaysById(id);
    }

  }
}
