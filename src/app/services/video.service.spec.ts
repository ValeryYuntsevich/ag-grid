import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VideoService } from './video.service';
import { expectedVideos } from './mockResponce';

describe('VideoService', () => {
  let service: VideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(VideoService);
  });

  it('should create VideoService', () => {
    expect(service).toBeDefined();
  });

  it('check return getUrlById()', () => {
    const url = `https://www.youtube.com/watch?v=`;
    const id = '3fumBcKC6RE';
    expect(service.getUrlById(id)).toEqual(url + id);
  });

  it('check return getUrlById()', () => {
    const url = `https://www.youtube.com/watch?v=`;
    const id = '3fumBcKC6RE';
    expect(service.getUrlById(id)).toEqual(url + id);
  });

  it('check return getVideo()', () => {
    service.getVideo().subscribe((res) => {
      expect(res).toBe(expectedVideos);
    });
  });
});
