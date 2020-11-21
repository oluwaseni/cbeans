import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PutmePage } from './putme.page';

describe('PutmePage', () => {
  let component: PutmePage;
  let fixture: ComponentFixture<PutmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutmePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PutmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
