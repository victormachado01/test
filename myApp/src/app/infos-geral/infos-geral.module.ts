import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosGeralPageRoutingModule } from './infos-geral-routing.module';

import { InfosGeralPage } from './infos-geral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosGeralPageRoutingModule
  ],
  declarations: [InfosGeralPage]
})
export class InfosGeralPageModule {}
