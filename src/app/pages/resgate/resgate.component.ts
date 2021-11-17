import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Acao } from 'src/app/models/acao';
import { Finance } from 'src/app/models/finance';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-resgate',
  templateUrl: './resgate.component.html',
  styleUrls: ['./resgate.component.scss']
})
export class ResgateComponent implements OnInit {

  financeDetail : Finance
  saldoTotal: number
  totalResgate: number
  

  constructor(
    private financeService: FinanceService,
    private route: Router,
    public dialog: MatDialog
  ) { 
    this.totalResgate = 0
  }



  ngOnInit(): void {
   this.financeDetail = this.financeService.getFinanceDetail()
   this.financeDetail.acoes.map(obj => {
    obj.calculoPercentual = (this.financeDetail.saldoTotal / 100) * obj.percentual
   })
   this.saldoTotal = this.financeDetail.saldoTotal
  }

  voltar(){
    this.route.navigate(['/'])
  }

  verificarValor(resgate: any, acao: Acao){
    this.saldoTotal += (acao.valResgate ? acao.valResgate : 0)
    acao.valResgate = +resgate
    this.saldoTotal -= acao.valResgate
  }

  getArrayFinance(){

    for(var i = 0; i < this.financeDetail.acoes.length; i++){
      if(this.financeDetail.acoes[i].valResgate){
       return this.financeDetail
      }
    }
  }

  confirm(){
    this.totalResgate = 0
    this.financeDetail.acoes.map(obj => obj.valResgate ? this.totalResgate += obj.valResgate : null)
    this.dialog.open(ModalComponent,{
      data: {
        finance: this.getArrayFinance()
      }
    });
  }
}
