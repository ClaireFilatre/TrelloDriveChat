import { Component } from '@angular/core';

@Component({
    selector: 'drive',
    templateUrl: './app/Drive/drive.html',
    styleUrls:['./app/Drive/drive.css']
})

export class Drive {
    public filesArray: Array<any>;

    constructor() {
        this.filesArray = [];
    }

    public ngOnInit() {
        //Recuperer fichier de la BDD
    }

    addFile(input: any) {
        if (input) {
            var file = input.files[0];
            //Mettre 'file' sur la BDD
            this.filesArray.push(file);
        }
    }
}
