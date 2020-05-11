import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AgGridComponent } from './ag-grid.component';
import { PageService } from 'src/app/services/page-service/page.service';
import { VideoService } from 'src/app/services/video-service/video.service';

describe('AgGridComponent', () => {
  let component: AgGridComponent;
  let fixture: ComponentFixture<AgGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [VideoService, PageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AgGridComponent', () => {
    expect(component).toBeDefined();
  });
});
