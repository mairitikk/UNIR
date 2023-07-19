import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaydataComponent } from './twowaydata.component';

describe('TwowaydataComponent', () => {
  let component: TwowaydataComponent;
  let fixture: ComponentFixture<TwowaydataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwowaydataComponent]
    });
    fixture = TestBed.createComponent(TwowaydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
