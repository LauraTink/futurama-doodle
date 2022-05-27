import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  @Input() errorMessage: string | null = 'An unexpected error has occured. Please refresh the page and try again.';
  constructor() {}
}
