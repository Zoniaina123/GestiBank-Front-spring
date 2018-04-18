import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorAccueilComponent } from './administrator-accueil.component';

describe('AdministratorAccueilComponent', () => {
  let component: AdministratorAccueilComponent;
  let fixture: ComponentFixture<AdministratorAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministratorAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
