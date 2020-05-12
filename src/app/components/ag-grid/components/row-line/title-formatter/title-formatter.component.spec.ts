import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleFormatterComponent } from './title-formatter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ICellRendererParams } from 'ag-grid-community';
import { VideoService } from 'src/app/services/video-service/video.service';
import { of } from 'rxjs';

describe('TitleFormatterComponent', () => {
  let component: TitleFormatterComponent;
  let fixture: ComponentFixture<TitleFormatterComponent>;
  let videoService: VideoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleFormatterComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: VideoService, useValue: {
        getUrlById: () => of('Product')
      }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleFormatterComponent);
    component = fixture.componentInstance;
    videoService = TestBed.inject(VideoService);
    fixture.detectChanges();
  });

  it('should create TitleFormatterComponent', () => {
    expect(component).toBeDefined();
  });

  it('check agInit() initialize component properly', () => {
    const id = '999';
    const baseUrl = 'http://youtube/';
    const params = { data: {  titleVideo : 'title', idVideo: id }} as ICellRendererParams;

    spyOn(videoService, 'getUrlById').and.returnValue(`${ baseUrl }${ id }`);
    component.agInit(params);
    expect(component.title).toEqual(params.data.titleVideo);
    expect(component.urlLink).toEqual(videoService.getUrlById(params.data.idVideo));
  });
});
