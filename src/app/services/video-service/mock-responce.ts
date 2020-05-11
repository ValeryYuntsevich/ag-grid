import { Video } from '../../models/video.model';

export const mockResponse: Video[] = [
    {
      idVideo: '3fumBcKC6RE',
      publishedAtVideo: new Date('2011-05-12T20:01:31.000Z'),
      titleVideo: 'Lil Wayne - John ft. Rick Ross (Explicit) (Official Music Video)',
      descriptionVideo: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
      thumbnailVideo: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
    },
];

export const rowResponse: any = {
  items: [
      {
          id: {
              videoId: '3fumBcKC6RE',
          },
          snippet: {
              publishedAt: '2011-05-12T20:01:31.000Z',
              title: 'Lil Wayne - John ft. Rick Ross (Explicit) (Official Music Video)',
              description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
              thumbnails: {
                default: {
                      url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
                  },
              },
          },
      },
  ]
};
