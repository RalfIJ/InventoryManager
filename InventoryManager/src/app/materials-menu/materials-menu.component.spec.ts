import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsMenuComponent } from './materials-menu.component';

describe('MaterialsMenuComponent', () => {
  let component: MaterialsMenuComponent;
  let fixture: ComponentFixture<MaterialsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
