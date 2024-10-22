import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvesmentInput } from '../Invesment-input';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() Calculate = new EventEmitter<InvesmentInput>();

  // enterInitialInvestment = '0';
  // enterAnnualInvestment = '0';
  // enterExpectedReturn = '0';
  // enterDuration = '0';

  // onsubmit() {
  //   this.Calculate.emit({
  //     // +this. to change string to number
  //     initialInvestment: +this.enterInitialInvestment,
  //     duration: +this.enterDuration,
  //     expectedReturn: +this.enterExpectedReturn,
  //     annualInvestment: +this.enterAnnualInvestment
  //   })
  // }
  enterInitialInvestment = signal('0');
  enterAnnualInvestment = signal('0');
  enterExpectedReturn = signal('0');
  enterDuration = signal('0');

  onsubmit() {
    this.Calculate.emit({
      // +this. to change string to number
      initialInvestment: +this.enterInitialInvestment(),
      duration: +this.enterDuration(),
      expectedReturn: +this.enterExpectedReturn(),
      annualInvestment: +this.enterAnnualInvestment()
    })
  }

}
