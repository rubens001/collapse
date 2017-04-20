import { Component, OnInit, Input, Output, OnChanges, SimpleChange, AUTO_STYLE, trigger, state, animate, transition, style, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css'],
  animations: [
    trigger('openClose', [
      state('collapsed, void',
        style({ height: '0px' })),
      state('expanded',
        style({ height: AUTO_STYLE })),
      transition('collapsed <=> expanded', [
        animate(200)
      ])
    ])
  ]
})
export class CollapsibleComponent implements OnInit, OnChanges {

  @Input() collapsed = true;
  @Input() title: string;
  @Input() iconName: string;
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
  collapsedState: string;

  constructor() { }

  ngOnInit() {
    this.verify();
  }

  ngOnChanges(changes: {[collapsed: string]: SimpleChange}) {
    this.verify();
  }

  toggle() {
    this.change.emit(this.collapsed);
  }

  verify() {
    this.collapsedState = this.collapsed ? 'collapsed' : 'expanded';
  }
}
