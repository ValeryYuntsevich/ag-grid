import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WindowService } from './window.service';
import { VideoService } from './video.service';

describe('WindowService', () => {
  let service: WindowService;
  let video: VideoService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [VideoService]
    });
    service = TestBed.inject(WindowService);
    video = jasmine.createSpyObj('VideoService', { getUrlById: 'test link' });
  });

  it('should create WindowService', () => {
    expect(service).toBeDefined();
  });

  it('check link', () => {
    const link = video.getUrlById('test');
    expect(link).toBe('test link');
  });
});
