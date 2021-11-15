import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterEvent } from '@angular/router';
import { Finance } from 'src/app/models/finance';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  listFinance :  Finance[]
  displayedColumns: string[] = ['nome', 'objetivo', 'saldoTotal'];
  constructor(
    private financeService: FinanceService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.financeService.getFinances().subscribe((res) => {
      this.listFinance = res.response.data.listaInvestimentos
      console.log(this.listFinance)
    })
  }

  goToResgate(finance: Finance){
    if(finance.indicadorCarencia == 'S'){

    }else{
      this.financeService.setFinanceDetail(finance)
      this.route.navigate(['/resgate'])
    }    
  }

  getCursor(finance: Finance): String{
    return finance.indicadorCarencia == "N" ? 'pointer' : 'not-allowed	';
  }

}
