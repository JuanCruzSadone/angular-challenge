import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MemberCardComponent } from './common/member-card/member-card.component';
import { MembersListComponent } from './congress-members/list/members-list.component';
import { MembersViewComponent } from './congress-members/view/members-view.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MemberService } from '../services/api/congress/congress-member/member.service';
import { ComponentsRoutingModule } from './components-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MemberCardComponent,
    MembersListComponent,
    MembersViewComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ComponentsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatListModule,
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [
    MemberService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MemberCardComponent,
    MembersListComponent,
    MembersViewComponent
  ]
})
export class ComponentsModule { }
