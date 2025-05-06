import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutpaysComponent } from './ajoutpays.component';

describe('AjoutpaysComponent', () => {
  let component: AjoutpaysComponent;
  let fixture: ComponentFixture<AjoutpaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutpaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutpaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
