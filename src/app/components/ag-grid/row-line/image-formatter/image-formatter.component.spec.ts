import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageFormatterComponent } from './image-formatter.component';
import { By } from '@angular/platform-browser';

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

  it('check class', async(() => {
    const img = fixture.debugElement.query(By.css('img'));
    expect(img.nativeElement.className).toBe('image');
  }));
});
