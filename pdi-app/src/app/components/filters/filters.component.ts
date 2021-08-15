import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UploaderService } from 'src/app/services/uploader/uploader.service';
import { InvertComponent } from './invert/invert.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements AfterViewInit {

  @ViewChild('invert') invertFilter: InvertComponent;

  constructor(
    private uploader: UploaderService,
  ) { }

  ngAfterViewInit(): void {
    this.uploader.loadedImage.subscribe((r) => {
      console.log('Image changed, must reset all!', r);
      this.invertFilter.reset();
    });
  }

}
