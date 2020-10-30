import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'treino',
    loadChildren: () => import('./treino/treino.module').then( m => m.TreinoPageModule)
  },
  {
    path: 'estatistica',
    loadChildren: () => import('./estatistica/estatistica.module').then( m => m.EstatisticaPageModule)
  },
  {
    path: 'infos-geral',
    loadChildren: () => import('./infos-geral/infos-geral.module').then( m => m.InfosGeralPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
