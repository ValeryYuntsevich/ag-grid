import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptionFormatterComponent } from './description-formatter.component';
import { By } from '@angular/platform-browser';
import { ICellRendererParams } from 'ag-grid-community';

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

  it('should create DescriptionFormatterComponent', () => {
    expect(component).toBeDefined();
  });

  it('renders description', async(() => {
    fixture.componentInstance.description = 'test';
    fixture.detectChanges();
    const description = fixture.debugElement.query(By.css('p'));
    expect(description.nativeElement.innerText).toBe('test');
  }));

  it('check agInit() initialize component properly', () => {
    const params = { value : 'description' } as ICellRendererParams;

    component.agInit(params);
    expect(component.description).toEqual(params.value);
  });
});
