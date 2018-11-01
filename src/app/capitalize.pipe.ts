import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any,): any {
    let splitString:any,capitalizedString:any,replaceString:any;
    splitString=value.split(" ");
    
    for(let i=0;i<splitString.length;i++){
      replaceString=splitString[i].substring(0,1).toUpperCase();
      splitString[i]=splitString[i].replace(splitString[i].substring(0,1),replaceString);
      
    }
    capitalizedString=splitString.join(" ");
    return capitalizedString ;
  }

}
