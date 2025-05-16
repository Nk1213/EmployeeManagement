import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newtest2Component } from './newtest2.component';

describe('Newtest2Component', () => {
  let component: Newtest2Component;
  let fixture: ComponentFixture<Newtest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newtest2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newtest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
