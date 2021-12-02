import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/Landing/sidebar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReposComponent } from './components/repos/repos.component';


const routes: Routes = [
  {path: '', redirectTo: '/sidebar', pathMatch: 'full'},
  {path: 'sidebar', component: SidebarComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'repos', component: ReposComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProfileComponent, ReposComponent, SidebarComponent, PageNotFoundComponent]
