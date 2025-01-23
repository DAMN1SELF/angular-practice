import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdurachonitaComponent } from './verdurachonita.component';

describe('VerdurachonitaComponent', () => {
  let component: VerdurachonitaComponent;
  let fixture: ComponentFixture<VerdurachonitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerdurachonitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerdurachonitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
