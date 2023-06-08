import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulopersonasComponent } from './modulopersonas.component';

describe('ModulopersonasComponent', () => {
  let component: ModulopersonasComponent;
  let fixture: ComponentFixture<ModulopersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulopersonasComponent]
    });
    fixture = TestBed.createComponent(ModulopersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
