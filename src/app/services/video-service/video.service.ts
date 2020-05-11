import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video, IVideosResponse } from 'src/app/models/video.model';

@Injectable({
  providedIn: 'root'
})

export class VideoService {
  private readonly dataUrl: string = environment.baseUrl;
  private readonly videoUrl: string = `https://www.youtube.com/watch?v=`;

  constructor(private httpClient: HttpClient) { }

  public getVideo(): Observable<Video[]> {
    return this.httpClient
      .get<IVideosResponse>(this.dataUrl)
      .pipe(
        map((data) =>
          data.items.map(
            (item) =>
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

  public getUrlById(id: string): string {
    return `${this.videoUrl}${id}`;
  }
}
