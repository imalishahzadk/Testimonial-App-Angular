import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials: { name: string, message: string }[] = [];
  newName = '';
  showIncludeTestimonial = false;

  addTestimonial() {
    this.showIncludeTestimonial = true;
  }

  onTestimonialSubmitted(message: string) {
    this.testimonials.push({ name: this.newName, message });
    this.showIncludeTestimonial = false;
    this.newName = '';
  }
}
