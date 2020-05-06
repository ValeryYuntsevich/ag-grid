import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionFormatterComponent } from './description-formatter.component';

describe('DescriptionFormatterComponent', () => {
  let component: DescriptionFormatterComponent;
  let fixture: ComponentFixture<DescriptionFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
