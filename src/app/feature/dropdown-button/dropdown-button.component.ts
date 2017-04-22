import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.css']
})
export class DropdownButtonComponent implements OnInit, OnChanges {

  @Input() collapsed = true;
  @Input() title: string;
  @Input() iconName?: string;
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
  collapsedState: string;

  constructor() { }

  ngOnInit() {
    this.verify();
  }

  ngOnChanges(changes: {[collapsed: string]: SimpleChange}) {
    console.log('iconName=', this.iconName);
    this.verify();
  }

  toggle() {
    this.change.emit(this.collapsed);
  }

  verify() {
    this.collapsedState = this.collapsed ? 'collapsed' : 'expanded';
  }
}

