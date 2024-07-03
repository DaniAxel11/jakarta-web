import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModalDetailComponent } from './page-modal-detail.component';

describe('PageModalDetailComponent', () => {
  let component: PageModalDetailComponent;
  let fixture: ComponentFixture<PageModalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageModalDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageModalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
