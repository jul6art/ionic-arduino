import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FieldErrorDisplayComponentComponent } from './field-error-display-component.component';

describe('FieldErrorDisplayComponentComponent', () => {
  let component: FieldErrorDisplayComponentComponent;
  let fixture: ComponentFixture<FieldErrorDisplayComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldErrorDisplayComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FieldErrorDisplayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
