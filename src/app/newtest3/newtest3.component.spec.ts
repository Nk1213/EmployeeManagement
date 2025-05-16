import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newtest3Component } from './newtest3.component';

describe('Newtest3Component', () => {
  let component: Newtest3Component;
  let fixture: ComponentFixture<Newtest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newtest3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newtest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
