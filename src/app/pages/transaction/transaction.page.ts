import { Component, OnInit } from '@angular/core';
import {TransactionsService} from '../../services/transactions.service';
import {Router} from '@angular/router';
import {log} from 'util';
import {BehaviorSubject} from 'rxjs';
import {IonSelect} from '@ionic/angular';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  myUser: any;
  total: any;
  forRetrait: any;
  type = 'depot';
infoTransactions: any;

  InfoDepot(name: any) {
    this.type = name;
  }
  constructor(private transaction: TransactionsService,
              private router: Router) {
    this.myUser = (localStorage.getItem('id'));
    if (this.type === 'depot') {
        this.transaction.myTransaction(this.myUser).subscribe(data => {
          // console.log(data);
          this.infoTransactions = data ;
          this.total = 0;
          for (const tran of this.infoTransactions) {
            this.total += tran.montant;
          }
          // console.log(this.total);
        }) ;
      }else {
        this.transaction.myTransactionRetrait(this.myUser).subscribe(response => {
          console.log(response);
          this.infoTransactions = response ;
          /*console.log(this.infoTransactions);*/
          this.total = 0;
          for (const tran of this.infoTransactions) {
            this.total += tran.montant;
          }
          // console.log(this.total);
        }) ;
      }
  }
  ngOnInit() {
    // refresh table
    this.transaction.refresNeeded$.subscribe(() => {
      this.transaction.myTransaction(this.myUser).subscribe( data => {
        this.infoTransactions = data;
      });
    });
    this.transaction.myTransaction(this.myUser).subscribe( data => {
      this.infoTransactions = data;
    });
  }


}
