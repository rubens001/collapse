import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Material + Flex-Layout + Animations = Collapse / Accordion !';
  collapsedState = [true, true, true, true, true, true, true];
}
