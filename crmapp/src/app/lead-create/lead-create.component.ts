import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-lead-create',
  templateUrl: './lead-create.component.html',
  styleUrls: ['./lead-create.component.css']
})
export class LeadCreateComponent implements OnInit {

  constructor(private apiService: APIService) { }

  ngOnInit() {
  }

  createLead(){
    var lead = {
      title: "Dr.",
      first_name: "Austin",
      last_name: "Lyman",
      email: "a.lyman@dentist.com",
      phone: "434009385",
      account: 1,
      status: "converted",
      source: "existing customer",
      address: "South Carolina",
      website: "austin.lyman.com",
      description: "A great surgeon that needs our help",
      assigned_to: "cpbuckingham",
      account_name: "dentist office",
      opportunity_amount: 93.99,
      createdBy: 1,
      isActive: true,
      enquery_type: "online request",
    };

    this.apiService.createLead(lead).subscribe((response) => {
      console.log(response);
    });
  };
}
