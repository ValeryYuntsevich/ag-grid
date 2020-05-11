import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageFormatterComponent } from './image-formatter.component';
import { ICellRendererParams } from 'ag-grid-community';

describe('ImageFormatterComponent', () => {
  let component: ImageFormatterComponent;
  let fixture: ComponentFixture<ImageFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ImageFormatterComponent', () => {
    expect(component).toBeDefined();
  });

  it('check agInit() initialize component properly', () => {
    const params = { value : 'title' } as ICellRendererParams;

    component.agInit(params);
    expect(component.imageLink).toEqual(params.value);
  });
});
