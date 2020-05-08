import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleFormatterComponent } from './title-formatter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { VideoService } from 'src/app/services/video.service';

describe('TitleFormatterComponent', () => {
  let component: TitleFormatterComponent;
  let fixture: ComponentFixture<TitleFormatterComponent>;
  let videoService: VideoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleFormatterComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [VideoService]
    })
    .compileComponents();
    videoService = jasmine.createSpyObj('videoService', { getUrlById: 'https://www.youtube.com/' });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create TitleFormatterComponent', () => {
    expect(component).toBeDefined();
  });

  it('should get message from videoService getUrlById()', () => {
    component.urlLink = videoService.getUrlById('test');
    expect(component.urlLink).toBe('https://www.youtube.com/');
  });

  it('renders a link with the provided title text', async(() => {
    fixture.componentInstance.title = 'title';
    fixture.detectChanges();
    const link = fixture.debugElement.query(By.css('a'));
    expect(link.nativeElement.innerText).toBe('title');
    expect(link.nativeElement.target).toBe('_blank');
  }));
});
