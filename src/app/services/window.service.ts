import { Injectable } from '@angular/core';
import { VideoService } from './video.service';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor(private video: VideoService) { }

  public openInNewTab(id: string): void {
    const link = this.video.getUrlById(id);
    window.open(link, '_blank');
  }
}
