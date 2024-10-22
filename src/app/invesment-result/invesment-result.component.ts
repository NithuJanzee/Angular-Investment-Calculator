import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { investmentService } from '../invesment.service';

@Component({
  selector: 'app-invesment-result',
  standalone: true,
  imports: [CurrencyPipe],
//providers: [investmentService],
  templateUrl: './invesment-result.component.html',
  styleUrl: './invesment-result.component.css'
})
export class InvesmentResultComponent implements OnInit {
  private investmentService = inject(investmentService);

  get resultsData() {
   return this.investmentService.resultsData;
  }

  ngOnInit() {
    console.log(this.resultsData); // Log the results when the component is initialized
  }
}
