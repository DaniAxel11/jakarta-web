import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container/page-container.component';
import { PageRoutingModule } from './page-routing.module';
import { PageSidebarComponent } from './page-sidebar/page-sidebar.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PageModalComponent } from './page-modal/page-modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PageContainerComponent,
    PageSidebarComponent,
    PageDashboardComponent,
    PageModalComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule 
  ],
  exports: [
    
  ]
})
export class PageModule { }
