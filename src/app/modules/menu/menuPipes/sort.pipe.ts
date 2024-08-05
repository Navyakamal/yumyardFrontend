import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(MenuArray:any[],sortData:string): any {
    if(!MenuArray || !sortData){
      return MenuArray
    }
    else{
      return MenuArray.sort((a:any,b:any)=>
      b.price-a.price)
    }
  }

}
