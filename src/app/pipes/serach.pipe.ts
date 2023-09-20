import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serach'
})
export class SerachPipe implements PipeTransform {

  transform(value: any, searchTerm:any) {
    return value.filter(function(search : any){
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > - 1
    })
  }

}
