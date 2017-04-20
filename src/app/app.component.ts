import { Component, OnChanges, SimpleChange, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Material + Flex-Layout + Animations = Collapse / Accordion !';
  collapsedState = [true, true, true, true];

  tabNumber = 0;

  constructor() {
  }
  
  ngOnInit() {
  }

  changed(ind: number) {
    // uncomment if you don't want to close the others 
    // this.collapsedState[ind] = !this.collapsedState[ind];

    // if you want to close the others
    for (let i = 0; i < this.collapsedState.length; i++) {
      if (i != ind) {
        this.collapsedState[i] = true;
      } else {
        this.collapsedState[i] = !this.collapsedState[i];
      }
    }
  }
}
