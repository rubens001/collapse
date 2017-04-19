import { Component, OnInit, trigger, state, style, transition, animate, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-chevron',
  templateUrl: './chevron.component.html',
  styleUrls: ['./chevron.component.css'],
  animations: [
    trigger('upDown', [
      state('up, void',
        style({ transform: 'rotate(180deg)' })),
      state('down',
        style({ transform: 'translateX(0%)' })),
      transition('up <=> down', [
        animate(200)
      ])
    ])
  ]
})
export class ChevronComponent implements OnInit, OnChanges {

  @Input() isDown: boolean;
  upState = 'down';

  constructor() { }

  ngOnInit() {
    this.toggle();
  }

  ngOnChanges(changes: {[isDown: string]: SimpleChange}) {
    this.toggle();
  }

  toggle() {
    this.upState = this.isDown ? 'down' : 'up';
  }
}
