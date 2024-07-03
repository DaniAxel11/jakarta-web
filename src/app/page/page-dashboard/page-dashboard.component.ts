import { Component } from '@angular/core';


@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent {

  dishes: any[] = [];


  
  handleFormSubmit(dish: any) {
    this.dishes.push(dish); 
  }



}
