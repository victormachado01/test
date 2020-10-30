import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfosGeralPage } from './infos-geral.page';

describe('InfosGeralPage', () => {
  let component: InfosGeralPage;
  let fixture: ComponentFixture<InfosGeralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosGeralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfosGeralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
