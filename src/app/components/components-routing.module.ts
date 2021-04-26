import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersListComponent } from './congress-members/list/members-list.component';
import { MembersViewComponent } from './congress-members/view/members-view.component';



const routes: Routes = [
  {
    path: 'members',
    component: MembersListComponent
  },
  {
    path: ':id/view',
    component: MembersViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
