import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PageService } from './page.service';
import { VideoService } from '../video-service/video.service';

describe('PageService', () => {
  let service: PageService;
  let video: VideoService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [VideoService]
    });
    service = TestBed.inject(PageService);
    video = jasmine.createSpyObj('VideoService', { getUrlById: 'test link' });
  });

  it('should create PageService', () => {
    expect(service).toBeDefined();
  });
});
