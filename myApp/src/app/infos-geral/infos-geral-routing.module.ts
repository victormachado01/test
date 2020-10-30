import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosGeralPage } from './infos-geral.page';

const routes: Routes = [
  {
    path: '',
    component: InfosGeralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosGeralPageRoutingModule {}
