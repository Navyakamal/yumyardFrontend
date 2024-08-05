import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(MenuArray:any[],filterCategory:string): any {
    if(!MenuArray || !filterCategory){
      return MenuArray
    }
    else{
      return MenuArray.filter((item:any)=>
      item.category==filterCategory)
    }

  }

}
