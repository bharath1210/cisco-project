import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMiddleComponent } from './side-nav-middle.component';

describe('SideNavMiddleComponent', () => {
  let component: SideNavMiddleComponent;
  let fixture: ComponentFixture<SideNavMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
