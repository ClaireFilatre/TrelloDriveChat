import {Component} from '@angular/core';

@Component({
    selector: 'trello',
    templateUrl: './app/Trello/trello.html'
})

export class Trello {
    public projectArray: Array<any>;


    public constructor() {
        this.projectArray = [];
        let projet1={
            name:"Projet 1",
            collaborateur:["poil de carrotte","petit tonnerre"],
            dateDebut:"05/09/1990",
            dateFin:"05/05/2020"
        }
        let projet2={
            name:"Projet 2",
            collaborateur:["Billy le dauphin"],
            dateDebut:"05/09/2010",
            dateFin:"30/05/2019"
        }
        this.projectArray.push(projet1)
        this.projectArray.push(projet1)
    }

    addProject(name:string,collaborateurs:any,dateD:any,dateF:any){
        let projectObject={
            name:name,
            collaborateur:[collaborateurs],
            dateDebut:dateD,
            dateFin:dateF
        }
        this.projectArray.push(projectObject);
    }
}
