import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitschComponent } from './ngswitsch.component';

describe('NgswitschComponent', () => {
  let component: NgswitschComponent;
  let fixture: ComponentFixture<NgswitschComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgswitschComponent]
    });
    fixture = TestBed.createComponent(NgswitschComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
