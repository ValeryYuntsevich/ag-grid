import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleFormatterComponent } from './title-formatter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TitleFormatterComponent', () => {
  let component: TitleFormatterComponent;
  let fixture: ComponentFixture<TitleFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleFormatterComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'title'`, () => {
    // expect(component.title).toEqual('title');
 });

  it('should render title in a h1 tag', async(() => {
    const anchor: HTMLAnchorElement = fixture.debugElement.query(By.css('a')).nativeElement;
    expect(anchor.target).toBe('_blank');
    expect(anchor.textContent).toBe('href');
  }));

});
