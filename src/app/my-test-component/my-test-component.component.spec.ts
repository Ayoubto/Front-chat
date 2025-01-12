import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTestComponentComponent } from './my-test-component.component';

describe('MyTestComponentComponent', () => {
  let component: MyTestComponentComponent;
  let fixture: ComponentFixture<MyTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyTestComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
