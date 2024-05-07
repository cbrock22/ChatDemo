import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryDemoComponent } from './secondary-demo.component';

describe('SecondaryDemoComponent', () => {
  let component: SecondaryDemoComponent;
  let fixture: ComponentFixture<SecondaryDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondaryDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondaryDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
