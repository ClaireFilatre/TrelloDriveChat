import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FilterArrayPipe} from '../pipes/filter-array-pipe';
import {ProjectService}from '../project.service'

@Component({
    selector: 'projet',
    templateUrl: './app/Projet/projet.html'
})

export class Projet implements OnInit {
    projects:any = [];
    projectId:any;

    constructor(private route: ActivatedRoute,
                private projectService: ProjectService) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.projectId=params['id'];
            this.getProject(params['id']);
        });
        let projectObject =    {
            "projectId":0,
            "name": "Projet 0",
            "collaborateur": [
                "User0"
            ],
            "dateDebut": "00/00/0000",
            "dateFin": "00/00/0000",
            "description": "Projet Test numero 0 description complete",
            "notes":"Note projet 0"
        }
        this.projects.push(projectObject);
    }

    getProject(projectId: string) {
        this.projectService.getProject(projectId)
            .then(
                project => this.projects = project ,
                error => this.errorMessage = <any>error
            );
    }
}