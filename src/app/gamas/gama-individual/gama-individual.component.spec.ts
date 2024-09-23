import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamaIndividualComponent } from './gama-individual.component';

describe('GamaIndividualComponent', () => {
  let component: GamaIndividualComponent;
  let fixture: ComponentFixture<GamaIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamaIndividualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamaIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
