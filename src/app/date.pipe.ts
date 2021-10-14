import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value){
      return "N/A";
    }
    return this.dateToTime(value);
  }

  dateToTime(timestamp: string | number | Date) {
    let date = new Date(timestamp);
    return date.toLocaleDateString();
  }
}
