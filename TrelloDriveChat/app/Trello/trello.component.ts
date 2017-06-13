import {Component} from '@angular/core';

import {ProjectService}from '../project.service'

@Component({
    selector: 'trello',
    templateUrl: './app/Trello/trello.html',
    styleUrls:['./app/Trello/trello.css']
})

export class Trello {
    public projectArray: Array<any>;


    public constructor(private projectService: ProjectService) {
    }

    ngOnInit() {
        this.getProjects();
    }

    addProject(name:string,collaborateurs:any,dateD:any,dateF:any){
        let projectObject={
            projectId:JSON.stringify(Date.now()),
            name:name,
            collaborateur:[collaborateurs],
            dateDebut:dateD,
            dateFin:dateF
        }
        this.projectArray.push(projectObject);
    }

    getProjects(){
        this.projectService.getProjects()
            .then(
                (project :any) => this.projectArray = project,
                error => this.errorMessage = <any>error);
    }
}
