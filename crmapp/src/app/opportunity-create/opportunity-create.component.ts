import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-opportunity-create',
  templateUrl: './opportunity-create.component.html',
  styleUrls: ['./opportunity-create.component.css']
})
export class OpportunityCreateComponent implements OnInit {

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  createOpportunity(){
    var opportunity = {
      name: "Teeth-whitening for less",
      account: 1,
      stage: "CLOSED WON",
      amount: "100.00",
      lead_source: "EMAIL",
      probability: "high",
      contacts: 1,
      closedBy: 1,
      closedOn: "1/9/19",
      description: "Teeth whitening at a reduced price",
      createdBy: 1,
      isActive: true,
    };

    this.apiService.createOpportunity(opportunity).subscribe((response) => {
      console.log(response);
    });
  };
}
