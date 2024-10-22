import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invesment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './invesment-result.component.html',
  styleUrl: './invesment-result.component.css'
})
export class InvesmentResultComponent {
  @Input() result?:{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested:number,
  }[];
}
