import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifelseComponent } from './ngifelse.component';

describe('NgifelseComponent', () => {
  let component: NgifelseComponent;
  let fixture: ComponentFixture<NgifelseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgifelseComponent]
    });
    fixture = TestBed.createComponent(NgifelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
