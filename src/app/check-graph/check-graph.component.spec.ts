import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckGraphComponent } from './check-graph.component';

describe('CheckGraphComponent', () => {
  let component: CheckGraphComponent;
  let fixture: ComponentFixture<CheckGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
