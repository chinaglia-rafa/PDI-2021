import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { ImageProcessorService } from 'src/app/services/image-processor/image-processor.service';

@Component({
  selector: 'app-realces',
  templateUrl: './realces.component.html',
  styleUrls: ['./realces.component.scss']
})
export class RealcesComponent implements OnInit {

  @ViewChild('logToggleId') logToggle: MatSlideToggle;

  constructor(public processor: ImageProcessorService) { }

  ngOnInit(): void {
  }

  reset() {
    this.logToggle.checked = false;
  }

}
