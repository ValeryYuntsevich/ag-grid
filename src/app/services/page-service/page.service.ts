import { Injectable } from '@angular/core';
import { VideoService } from '../video-service/video.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private video: VideoService) { }

  public openInNewTab(link: string): void {
    window.open(link, '_blank');
  }
}
