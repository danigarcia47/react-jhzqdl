import Home from '../components/Home';
import { PaginaListas } from '../components/PaginaListas';
import { Perfil } from '../components/Perfil';
import  Coches  from '../components/Coches';
import F1 from '../components/F1';
import PelisGhibli from '../components/PelisGhibli';
import Potter from '../components/Breaking';


export const MenuItems = [
  { 
    id: 1,
    path:'/',
    title:'Home',
    component: Home,
  },
  {
    id: 2,
    path:'/listas',
    title: 'Listas de tareas',
    component: PaginaListas,
  },
  {
    id: 3,
    path:'/perfil',
    title: 'Perfil',
    component: Perfil,
  },
  {
    id: 4,
    path:'/coches',
    title: 'Coches',
    component: Coches,
  },
  {
    id: 5,
    path:'/f1',
    title: 'F1',
    component: F1,
  },
  {
    id: 6,
    path:'/ghibli',
    title:'Peliculas Ghibli',
    component: PelisGhibli,
  },
  {
    id: 7,
    path:'/breaking',
    title: 'Personajes Breaking Bad',
    component: Potter,
  },
];

/*
path
id
title
component
*/