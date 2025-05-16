import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierCardComponent } from './quartier-card.component';

describe('QuartierCardComponent', () => {
  let component: QuartierCardComponent;
  let fixture: ComponentFixture<QuartierCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuartierCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartierCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
