import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HelloComponent } from '../hello/hello.component';
import { HomeComponent } from '../home/home.component';
const Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'hello',
    component: HelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
