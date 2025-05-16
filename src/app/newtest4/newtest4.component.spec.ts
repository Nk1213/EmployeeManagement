import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newtest4Component } from './newtest4.component';

describe('Newtest4Component', () => {
  let component: Newtest4Component;
  let fixture: ComponentFixture<Newtest4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newtest4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newtest4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
