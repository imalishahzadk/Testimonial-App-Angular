import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeTestimonialComponent } from './include-testimonial.component';

describe('IncludeTestimonialComponent', () => {
  let component: IncludeTestimonialComponent;
  let fixture: ComponentFixture<IncludeTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncludeTestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncludeTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
