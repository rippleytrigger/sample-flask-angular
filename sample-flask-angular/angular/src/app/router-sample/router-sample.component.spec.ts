import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterSampleComponent } from './router-sample.component';

describe('RouterSampleComponent', () => {
  let component: RouterSampleComponent;
  let fixture: ComponentFixture<RouterSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
