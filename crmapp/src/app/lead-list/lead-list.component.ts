import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {

  private leads: Array<object> = [];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.getLeads();

  }

  public getLeads(){
    this.apiService.getLeads().subscribe((data: Array<object>) => {

      this.leads = data;
      console.log(data);
    });
  }

}
