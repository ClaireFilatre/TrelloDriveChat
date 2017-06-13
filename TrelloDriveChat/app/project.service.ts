import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ProjectService{
    // URL to web API
    private projectUrl = 'projects/projects.json';

    constructor(private http: Http) {
    }

    getProjects(): Promise<any[]> {
        return this.http.get(this.projectUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getProject(projectId: string): Promise<any[]> {
        return this.getProjects();
        // let Projects: any;
        // this.getProjects().then(
        //         project => Projects = project ,
        //         error => this.errorMessage = <any>error
        //     );
        // console.log("Project detail service -> "+JSON.stringify(Projects));
        // return Projects.filter((project:any) =>project.projectId.match(new RegExp(projectId,'i')) );
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}
