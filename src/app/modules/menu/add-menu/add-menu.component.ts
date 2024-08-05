import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../menuServices/menu.service';
import { ToastService } from 'src/app/adminServices/toast.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {

  constructor(private fb:FormBuilder,private ms:MenuService,private toast:ToastService){ }

  
  addForm=this.fb.group({
    dishname:['',[Validators.required,Validators.pattern('^[a-zA-Z ]+')]],
    price:['',[Validators.required,Validators.pattern('^[0-9 ]+')]],
    category:['',Validators.required],
    image:['',Validators.required]
  })

  addMenu(){
    if(this.addForm.valid){
        var path=this.addForm.value
        this.ms.addMenuApi({name:path.dishname,price:path.price,category:path.category,image:path.image})
        .subscribe((result:any)=>{
          this.toast.showSuccess("Dish added")
          this.addForm.reset()
        })

    }
    else{
      this.toast.showError("Invalid from")
    }
  }

}
