import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.css']
})
export class OpportunityListComponent implements OnInit {

  private opportunities: Array<object> = [];

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.getOpportunities();

  }

  public getOpportunities(){
    this.apiService.getOpportunities().subscribe((data: Array<object>) => {

      this.opportunities = data;
      console.log(data);
    });
  }

}
