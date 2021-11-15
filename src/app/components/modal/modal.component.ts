import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Finance } from 'src/app/models/finance';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  valoresIndevidos : any[] = []
  modalVazio: boolean = false

  constructor(
    private route: Router,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    if(this.data.finance){
      this.data.finance.acoes.map(obj => {
        if(obj.valResgate > obj.calculoPercentual){
          this.valoresIndevidos.push(obj)
        }
      })
    }else{
      this.modalVazio = true
    }
  }

  voltar(){
    this.route.navigate(['/'])
  }

}
