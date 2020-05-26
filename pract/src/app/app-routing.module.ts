import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { GroupComponent } from './group/group.component';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserGroupinfoComponent } from './user-groupinfo/user-groupinfo.component';
import { UsersideComponentComponent } from './userside-component/userside-component.component';

const routes: Routes = [ { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent ,runGuardsAndResolvers: 'always',},
  { path: 'home', component: HomeComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'grouplist', component: GrouplistComponent },
  { path: 'group', component: GroupComponent },
  { path: 'userpage', component: UserpageComponent },
  { path: 'user-group', component: UserGroupComponent },
  { path: 'user-groupinfo', component: UserGroupinfoComponent },
  { path: 'userinfo', component: UserinfoComponent },
  { path: 'userside-component', component: UsersideComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
