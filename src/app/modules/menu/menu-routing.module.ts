import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { AllMenuComponent } from './all-menu/all-menu.component';

const routes: Routes = [
  { path: '', component: AllMenuComponent },
  { path: 'add', component: AddMenuComponent },
  { path: ':id/edit', component: EditMenuComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
