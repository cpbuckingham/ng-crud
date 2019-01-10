import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  // createAccount(){
  //   var account = {
  //     account_id: 1,
  //     assigned_to: 1,
  //     Name: "sales office",
  //     industry: "FINANCE",
  //     website: "http://www.cpbuckingham.com/",
  //     createdBy: 1,
  //     description: "This is the first account",
  //     email: "cpbuckingham@email.com",
  //     isActive: true,
  //     phone: "3016021380",
  //   };
  //
  //   this.apiService.createAccount(account).subscribe((response) => {
  //     console.log(response);
  //   });
  // };

}
