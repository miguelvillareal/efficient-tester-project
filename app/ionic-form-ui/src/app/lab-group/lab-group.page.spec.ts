import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LabGroupPage } from './lab-group.page';

describe('LabGroupPage', () => {
  let component: LabGroupPage;
  let fixture: ComponentFixture<LabGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabGroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LabGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
