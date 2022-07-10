import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage,} from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
   
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}