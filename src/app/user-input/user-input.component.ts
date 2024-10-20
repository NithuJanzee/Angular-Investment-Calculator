import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() Calculate = new EventEmitter<{
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
  }>();

  enterInitialInvestment = '0';
  enterAnnualInvestment = '0';
  enterExpectedReturn = '0';
  enterDuration = '0';

  onsubmit() {
    this.Calculate.emit({
      // +this. to change string to number
      initialInvestment: +this.enterInitialInvestment,
      duration: +this.enterDuration,
      expectedReturn: +this.enterExpectedReturn,
      annualInvestment: +this.enterAnnualInvestment
    })
  }

}
