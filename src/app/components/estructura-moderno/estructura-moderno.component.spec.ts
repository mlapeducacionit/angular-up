import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstructuraModernoComponent } from './estructura-moderno.component';

describe('EstructuraModernoComponent', () => {
  let component: EstructuraModernoComponent;
  let fixture: ComponentFixture<EstructuraModernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstructuraModernoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstructuraModernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
