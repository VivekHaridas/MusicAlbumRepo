import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any,b?:any): any {
    console.log("*** ",args,b)
    return "Hello saran";
  }

}
