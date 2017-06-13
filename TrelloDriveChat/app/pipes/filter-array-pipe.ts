import { Pipe, PipeTransform } from '@angular/core';

// # Filter Array of Objects
@Pipe({ name: 'filter' })
export class FilterArrayPipe implements PipeTransform {
    transform(items:any, args:string) {
        if (!args || !args[0]) {
            return items;
<<<<<<< HEAD
        } else if (items) {
            console.log("Args value -> " + args);
            return items.filter((item: any) => item.projectId.match(new RegExp(args, 'i')));
        }
=======
        } else if (items)
            return items.filter((item: any) => item.projectId.match(new RegExp(args, 'i')));
>>>>>>> 8c157a48394a65daa5c1cce3cc6e46b3b1742148
    }
}