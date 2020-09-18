import { Pipe, PipeTransform } from '@angular/core';
import sortBy from 'sort-by';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(list: Object[], params?: string): Object[] {
    if(params.length){
      return list.sort(sortBy(params))
    }
    return null;
  }

}
