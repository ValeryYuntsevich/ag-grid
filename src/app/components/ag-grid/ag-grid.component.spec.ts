import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AgGridComponent } from './ag-grid.component';
import { VideoService } from 'src/app/services/video.service';
import { WindowService } from 'src/app/services/window.service';
import { expectedVideos } from 'src/app/services/mockResponce';

describe('AgGridComponent', () => {
  let component: AgGridComponent;
  let fixture: ComponentFixture<AgGridComponent>;
  let videoService: VideoService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [VideoService, WindowService]
    })
    .compileComponents();
    videoService = jasmine.createSpyObj('videoService', { getVideo: expectedVideos });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AgGridComponent', () => {
    expect(component).toBeDefined();
  });

  it('should get data', () => {
    component.rowData = videoService.getVideo();
    fixture.detectChanges();
    expect(component.rowData).not.toBeNull();
  });
});
