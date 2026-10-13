import { Routes } from '@angular/router';

import {Panier} from './panier/panier';
import {Jus} from './jus/jus';
import {Patisserie} from './patisserie/patisserie';
import {Contact} from './contact/contact';
import { Login } from './login/login';
import { liverison } from './liverison/liverison';
import { Paiment } from './paiment/paiment';
import { Header } from './header/header';
import { Home } from './Shared/home/home';


export const routes: Routes = [
    {path: "panier", component: Panier},
    {path: "contact", component: Contact},
    {path: "jus", component: Jus },
    {path: "patisserie", component: Patisserie},
    {path: "login", component: Login},
    {path: "liverison", component: liverison},
    {path: "paiment", component: Paiment},
    {path: "header", component: Header},
    {path: "", component: Home}


];
