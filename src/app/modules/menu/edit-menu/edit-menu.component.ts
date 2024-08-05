import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../menuServices/menu.service';
import { ToastService } from 'src/app/adminServices/toast.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit{

  id:any=""
  menuData:any=[]

  constructor(private ar:ActivatedRoute,private ms:MenuService,private rout:Router,private toast:ToastService){ }

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.id=data.id
      this.ms.getSingleMenuApi(this.id).subscribe((data:any)=>{
        this.menuData=data
        console.log(this.menuData);
        
      })
      
    })
  }

  update(){
    this.ms.editmenuApi(this.id,this.menuData).subscribe((data:any)=>{
      this.toast.showSuccess("Updated successfully")
      this.rout.navigateByUrl('/menu')
    }
    )
    
  }
}
