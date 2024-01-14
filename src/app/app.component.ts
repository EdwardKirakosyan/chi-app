import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chi-app';
  fullName: string = '';
  @ViewChildren('inputEl', {}) inputElements?: QueryList<ElementRef>;

  show() {
    let name = ''
    this.inputElements?.forEach((el) => {
      name += el.nativeElement.value + ' '
    })
    this.fullName = name.trim();
  }
}
