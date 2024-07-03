import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PageModalComponent } from '../page-modal/page-modal.component';
import { PageModalDetailComponent } from '../page-modal-detail/page-modal-detail.component';


@Component({
  selector: 'app-page-dashboard',
  templateUrl: './page-dashboard.component.html',
  styleUrls: ['./page-dashboard.component.scss']
})
export class PageDashboardComponent {

  dishes: any[] = [];

  constructor(private modalService: NgbModal){}

  handleFormSubmit(dish: any) {
    this.dishes.push(dish); 
  }

  showModal(dish: any) {
    const modalRef: NgbModalRef = this.modalService.open(PageModalDetailComponent, { centered: true });
    modalRef.componentInstance.dish = dish;

    modalRef.componentInstance.updateDish.subscribe((updatedDish: any) => {
      const index = this.dishes.findIndex(d => d.imageUrl === updatedDish.imageUrl);
      if (index > -1) {
        this.dishes[index] = updatedDish;
      }
    });
  }


}
