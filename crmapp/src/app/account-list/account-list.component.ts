import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  private accounts: Array<object> = [];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.getAccounts();

  }

  public getAccounts(){
    this.apiService.getAccounts().subscribe((data: Array<object>) => {

      this.accounts = data;
      console.log(data);
    });
  }

}
