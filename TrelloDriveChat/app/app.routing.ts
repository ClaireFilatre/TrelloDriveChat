import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {Drive} from './Drive/drive.component';
import {Home} from './Home/home.component';
import {Messagerie} from './Messagerie/messagerie.component';
import {Projet} from './Projet/projet.component';
import {Trello} from './Trello/trello.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'drive',
        component: Drive
    },
    {
        path: 'messagerie',
        component: Messagerie
    },
    {
        path: 'projet',
        component: Projet
    },
    {
        path: 'trello',
        component: Trello
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });