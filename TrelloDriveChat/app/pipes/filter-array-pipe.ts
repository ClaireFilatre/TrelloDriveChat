import { Pipe, PipeTransform } from '@angular/core';

// # Filter Array of Objects
@Pipe({ name: 'filter' })
export class FilterArrayPipe implements PipeTransform {
    transform(items:any, args:string) {
        if (!args || !args[0]) {
            return items;
        } else if (items)
            return items.filter((item: any) => item.projectId.match(new RegExp(args, 'i')));
    }
}