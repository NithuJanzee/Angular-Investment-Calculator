import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { investmentService } from '../invesment.service';


@Component({
  selector: 'app-invesment-result',
  standalone: true,
  imports: [CurrencyPipe,],
  providers:[investmentService],
  templateUrl: './invesment-result.component.html',
  styleUrl: './invesment-result.component.css'
})
export class InvesmentResultComponent {
 //another way to inject (ctor)
 private investmentService = inject(investmentService);

 get results(){
  return this.investmentService.resultsData; 
 }
}
