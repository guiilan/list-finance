import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'
import { Observable } from 'rxjs';
import { Finance } from '../models/finance';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private url = "https://run.mocky.io/v3/7b2dfe42-37a3-4094-b7ce-8ee4f8012f30";

  private financeDetail: Finance;

  constructor(
    private http: HttpClient
  ) { }

  getFinances(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  setFinanceDetail(finance: Finance){
    this.financeDetail = finance
  }

  getFinanceDetail(){
    return this.financeDetail
  }

  
}
