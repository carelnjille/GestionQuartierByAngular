import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonCardComponent } from './maison-card.component';

describe('MaisonCardComponent', () => {
  let component: MaisonCardComponent;
  let fixture: ComponentFixture<MaisonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaisonCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaisonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
