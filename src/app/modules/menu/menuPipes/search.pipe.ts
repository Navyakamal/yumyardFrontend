import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(MenuArray:any[],searchString:string): any {
    if(!MenuArray || !searchString){
      return MenuArray
    }
    else{
      return MenuArray.filter((i:any)=>i.name.trim().toLowerCase().includes(
        searchString.trim().toLowerCase()
      ))
    }
  }

}
