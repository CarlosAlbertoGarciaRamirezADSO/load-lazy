import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamasComponent } from './gamas.component';

describe('GamasComponent', () => {
  let component: GamasComponent;
  let fixture: ComponentFixture<GamasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
