import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menuServices/menu.service';
import { ToastService } from 'src/app/adminServices/toast.service';

@Component({
  selector: 'app-all-menu',
  templateUrl: './all-menu.component.html',
  styleUrls: ['./all-menu.component.css']
})
export class AllMenuComponent implements OnInit {

  allMenu:any=[]
  filterData:any=""
  searchData:any=""
  sortData:any=false
  p: number = 1;
  activeButton: any = '';

  constructor(private ms:MenuService,private toast:ToastService){ }

  ngOnInit(): void {
    this.getMenu()
  }

  changeFilterData(data:any){
    this.filterData=data
    this.activeButton = data;
  }
  
  sortPrice(){
    this.sortData=!this.sortData
  }
  getMenu(){
    this.ms.getMenuApi().subscribe((result:any)=>{
      this.allMenu=result
      console.log(this.allMenu);
      
    })
  }
  deleteMenu(id:any){
    this.ms.deleteMenuApi(id).subscribe((result)=>{
      this.toast.showSuccess("Deleted successfully")
      this.getMenu()
    })
  }

}
