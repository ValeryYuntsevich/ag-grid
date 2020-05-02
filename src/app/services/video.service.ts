import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from '../models/video.model';


@Injectable({
  providedIn: 'root'
})

export class VideoService {
  // readonly dataUrl: string = environment.baseUrl;
  readonly videoUrl: string = `https://www.youtube.com/watch?v=`;
  readonly dataUrl: string = './assets/data.json';

   checkBox = new BehaviorSubject<boolean>(false);
   checkBoxHeader = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) { }

  getVideo(): Observable<Video[]> {
    return this.httpClient
      .get<any>(this.dataUrl)
      .pipe(
        map((data: any) =>
          data.items.map(
            (item: any) =>
              new Video(
                item.id.videoId,
                item.snippet.thumbnails.default.url,
                item.snippet.title,
                new Date(item.snippet.publishedAt),
                item.snippet.description
              )
          )
        )
      );
  }

  getUrlById(id: string): string {
    return `${this.videoUrl}${id}`;
  }
}
