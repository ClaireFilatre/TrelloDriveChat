import { Pipe, PipeTransform } from '@angular/core';

// # Filter Array of Objects
@Pipe({ name: 'filter' })
export class FilterArrayPipe implements PipeTransform {
    transform(items:any, args:string) {
        if (!args || !args[0]) {
            return items;
        } else if (items) {
            console.log("Args id -> " + args);
            return items.filter((item: any) => {
                console.log("Item id -> " + item.projectId);
                item.projectId.match(new RegExp(args, 'i'));
            });
        }
    }
}