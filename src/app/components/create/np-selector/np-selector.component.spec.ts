import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpSelectorComponent } from './np-selector.component';

describe('NpSelectorComponent', () => {
  let component: NpSelectorComponent;
  let fixture: ComponentFixture<NpSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
