import { Component } from '@angular/core';
import { HeaderComponent } from './head/header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent]
})
export class AppComponent {}
