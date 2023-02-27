import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../core/data.service';
import { ICustomer } from '../../../shared/interfaces';


@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css'],
  providers:[DataService]
})
export class DashboardComponentComponent implements OnInit {

  title: string = '';
  people: any[] = [];

//   private _customers: ICustomer[] = [];
//   get customers(): ICustomer[] {
//         return this._customers;
//     }
//   set customers(people: ICustomer[]) {
//     if (people) {
//         this.filteredCustomers  = people;
//     }
// }

// filteredCustomers: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.title = 'Customers';
        this.dataService.getCustomers()
            .subscribe((customers: ICustomer[]) => this.people = customers);
  }

}
