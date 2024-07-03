import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContainerComponent } from './page-container/page-container.component';
import { PageDashboardComponent } from './page-dashboard/page-dashboard.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { PageWelcomeComponent } from './page-welcome/page-welcome.component';

const routes: Routes = [
  { 
    path: '',
    component: PageContainerComponent,
    children: [

      {
        path: 'welcome',
        component: PageWelcomeComponent
      },
      {
        path: 'inventario',
        component: PageDashboardComponent
      },
      {
        path: 'profile',
        component: PageProfileComponent
      }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule { }
