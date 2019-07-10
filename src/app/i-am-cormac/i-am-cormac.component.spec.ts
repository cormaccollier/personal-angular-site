import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IAmCormacComponent } from './i-am-cormac.component';

describe('IAmCormacComponent', () => {
  let component: IAmCormacComponent;
  let fixture: ComponentFixture<IAmCormacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IAmCormacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IAmCormacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
