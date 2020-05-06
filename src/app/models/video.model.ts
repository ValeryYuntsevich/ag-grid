export class Video {
    constructor(
      public idVideo: string,
      public thumbnailVideo: string,
      public titleVideo: string,
      public publishedAtVideo: Date,
      public descriptionVideo: string
    ) {}
}

export interface IVideo {
  id: { videoId: string };
  snippet: {
      description: string;
      publishedAt: string;
      title: string;
      thumbnails: {
        default: { url: string };
      };
  };
}

export interface IVideosResponse {
  items: IVideo[];
}
