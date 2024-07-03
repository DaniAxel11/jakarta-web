import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-modal-detail',
  templateUrl: './page-modal-detail.component.html',
  styleUrls: ['./page-modal-detail.component.scss']
})
export class PageModalDetailComponent {

  @Input() dish: any;
  @Output() updateDish = new EventEmitter<any>();

  constructor(public modal: NgbActiveModal) {}

  submitForm() {
    this.updateDish.emit(this.dish);
    this.modal.close();
  }
}
  
