import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  API_URL = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) {}

  //////////ACCOUNTS
  getAccounts(){
    return this.httpClient.get(`${this.API_URL}/accounts`);
  }
  createAccount(account){
    return this.httpClient.post(`${this.API_URL}/accounts/`,account);
  }
//////////CONTACTS
  getContacts(){
    return this.httpClient.get(`${this.API_URL}/contacts`);
  }
  createContact(contact){
    return this.httpClient.post(`${this.API_URL}/contacts/`,contact);
  }
  updateContact(contact){
    return this.httpClient.put(`${this.API_URL}/contacts/`,contact);
  }
  deleteContact(contact){
    return this.httpClient.delete(`${this.API_URL}/contacts/${contact.pk}`);
  }
//////////LEADS
  getLeads(){
    return this.httpClient.get(`${this.API_URL}/leads`);
  }
  createLead(lead){
    return this.httpClient.post(`${this.API_URL}/leads/`,lead);
  }
//////////OPPORTUNITIES
  getOpportunities(){
    return this.httpClient.get(`${this.API_URL}/opportunities`);
  }
  createOpportunity(opportunity){
    return this.httpClient.post(`${this.API_URL}/opportunities/`,opportunity);
  }
}
