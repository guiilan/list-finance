import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ResgateComponent } from './pages/resgate/resgate.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'resgate', component: ResgateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }