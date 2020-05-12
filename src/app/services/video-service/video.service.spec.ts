import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { rowResponse } from './mock-responce';
import { VideoService } from './video.service';
import { HttpClient } from '@angular/common/http';

describe('VideoService', () => {
  let service: VideoService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(VideoService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create VideoService', () => {
    expect(service).toBeDefined();
  });

  it('check return getUrlById()', () => {
    const url = `https://www.youtube.com/watch?v=`;
    const id = '3fumBcKC6RE';
    expect(service.getUrlById(id)).toEqual(url + id);
  });

  it('check get videos', (done: DoneFn) => {
    service.getVideo().subscribe(videos => {
      expect(videos.length).toBe(rowResponse.items.length);
      const videoViewModel = videos[0];
      const videoDataModel = rowResponse.items[0];
      expect(videoViewModel.idVideo)
        .toEqual(videoDataModel.id.videoId);
      expect(videoViewModel.publishedAtVideo)
        .toEqual(new Date(videoDataModel.snippet.publishedAt));
      expect(videoViewModel.titleVideo)
        .toEqual(videoDataModel.snippet.title);
      expect(videoViewModel.descriptionVideo)
        .toEqual(videoDataModel.snippet.description);
      expect(videoViewModel.thumbnailVideo)
        .toEqual(videoDataModel.snippet.thumbnails.default.url);
      done();
    });

    const req = httpTestingController.expectOne(() => true);
    req.flush(rowResponse);
    httpTestingController.verify();
  });
});
