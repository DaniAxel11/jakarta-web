import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageContainerComponent } from './page-container/page-container.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';

const routes: Routes = [
  { 
    path: '',
    component: PageContainerComponent,
    children: [
      {
        path: 'inventario',
        component: PageDashboardComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule { }
