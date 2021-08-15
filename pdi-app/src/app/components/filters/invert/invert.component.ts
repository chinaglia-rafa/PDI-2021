import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { ImageProcessorService } from 'src/app/services/image-processor/image-processor.service';
import { UploaderService } from 'src/app/services/uploader/uploader.service';

@Component({
  selector: 'app-invert',
  templateUrl: './invert.component.html',
  styleUrls: ['./invert.component.scss']
})
export class InvertComponent implements OnInit {

  @ViewChild('invertToggleId') invertToggle: MatSlideToggle;

  constructor(
    public processor: ImageProcessorService
  ) { }

  ngOnInit(): void {

  }

  toggleChange(event: any) {
    console.log('event', event);
    this.processor.invert();
  }

  reset() {
    this.invertToggle.checked = false;
  }

}
