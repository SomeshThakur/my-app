import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCreationDate]',
})
export class CreationDateDirective implements OnInit {
  @Input() creationDate: string;
  constructor(private element: ElementRef) {}
  ngOnInit() {
    const today = new Date();
    let color;
    let fouteenDaysBack = new Date();

    const _creationDate = new Date(this.creationDate);

    fouteenDaysBack.setDate(fouteenDaysBack.getDate() - 14);
    if (_creationDate < today && _creationDate >= fouteenDaysBack) {
      color = 'green';
    } else if (_creationDate > today) {
      color = 'blue';
    } else {
      color = null;
    }
    this.element.nativeElement.style.border = color
      ? `3px solid ${color}`
      : color;
  }
}
