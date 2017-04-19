import { Component, OnInit, Input, OnChanges, SimpleChange, AUTO_STYLE, trigger, state, animate, transition, style } from '@angular/core';

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
  collapsedState: string;

  constructor() { }

  ngOnInit() {
    this.toggle();
  }

  ngOnChanges(changes: {[collapsed: string]: SimpleChange}) {
    this.toggle();
  }

  toggle() {
    this.collapsed = !this.collapsed;
    this.collapsedState = this.collapsed ? 'collapsed' : 'expanded';
  }
}
