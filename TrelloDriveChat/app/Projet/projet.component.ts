import {Component,OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FilterArrayPipe} from '../pipes/filter-array-pipe';
import {ProjectService}from '../project.service'

@Component({
    selector: 'projet',
    templateUrl: './app/Projet/projet.html',
    styleUrls:['./app/Projet/projet.css']
})

export class Projet implements OnInit {
    projects:any = [];
    projectId:any;

    constructor(private route: ActivatedRoute,
                private projectService: ProjectService) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.projectId=(params['id']);
            this.getProject(params['id']);
        });
    }

    getProject(projectId: string) {
        this.projectService.getProject(projectId)
            .then(
                project => this.projects = project ,
                error => this.errorMessage = <any>error
            );
    }
}