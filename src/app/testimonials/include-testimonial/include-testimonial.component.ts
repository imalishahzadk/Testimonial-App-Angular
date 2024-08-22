import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-testimonials-include-testimonial',
  templateUrl: './include-testimonial.component.html',
  styleUrls: ['./include-testimonial.component.css']
})
export class IncludeTestimonialComponent {
  @Input() name: string = '';
  @Output() testimonialSubmitted = new EventEmitter<string>();

  newTestimonial: string = '';

  submitTestimonial() {
    this.testimonialSubmitted.emit(this.newTestimonial);
  }
}
