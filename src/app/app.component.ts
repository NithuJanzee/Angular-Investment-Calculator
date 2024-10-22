import { Component } from '@angular/core';
import { HeaderComponent } from './head/header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvesmentResultComponent } from './invesment-result/invesment-result.component';
import { investmentService } from './invesment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvesmentResultComponent],
  providers:[investmentService]
})
export class AppComponent {

}
