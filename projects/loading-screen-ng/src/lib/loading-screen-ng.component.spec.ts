import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingScreenNgComponent } from './loading-screen-ng.component';

describe('LoadingScreenNgComponent', () => {
  let component: LoadingScreenNgComponent;
  let fixture: ComponentFixture<LoadingScreenNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingScreenNgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingScreenNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
