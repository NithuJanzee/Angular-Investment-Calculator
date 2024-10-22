import { Component,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentService } from '../invesment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  providers:[investmentService],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enterInitialInvestment = signal('0');
  enterAnnualInvestment = signal('0');
  enterExpectedReturn = signal('0');
  enterDuration = signal('0');

  constructor(private investmentService: investmentService) { }

  onsubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.enterInitialInvestment(),
      duration: +this.enterDuration(),
      expectedReturn: +this.enterExpectedReturn(),
      annualInvestment: +this.enterAnnualInvestment()
    })
  }

}
