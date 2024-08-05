import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { AllMenuComponent } from './all-menu/all-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './menuPipes/filter.pipe';
import { SearchPipe } from './menuPipes/search.pipe';
import { SortPipe } from './menuPipes/sort.pipe';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    MenuComponent,
    AllMenuComponent,
    AddMenuComponent,
    EditMenuComponent,
    FilterPipe,
    SearchPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule

  ]
})
export class MenuModule { }
