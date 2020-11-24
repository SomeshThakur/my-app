import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(minutes) {
    const date = new Date(0, 0, 0, 0, minutes, 0);
    let hours = date.getHours().toString();
    hours = +hours ? `${+hours}h` : '';
    let min = date.getMinutes().toString();
    min = +min ? `${+min}min` : '0min';
    return `${hours} ${min}`;
  }
}
