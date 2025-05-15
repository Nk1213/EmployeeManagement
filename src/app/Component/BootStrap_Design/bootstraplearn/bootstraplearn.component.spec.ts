import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstraplearnComponent } from './bootstraplearn.component';

describe('BootstraplearnComponent', () => {
  let component: BootstraplearnComponent;
  let fixture: ComponentFixture<BootstraplearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstraplearnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstraplearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
