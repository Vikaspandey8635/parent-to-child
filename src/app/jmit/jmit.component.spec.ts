import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JmitComponent } from './jmit.component';

describe('JmitComponent', () => {
  let component: JmitComponent;
  let fixture: ComponentFixture<JmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
