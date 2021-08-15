import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  @ViewChild('pixelatedToggleId') pixelatedToggle: MatSlideToggle;
  @ViewChild('realSizeToggleId') realSizeToggle: MatSlideToggle;

  constructor(
    public configService: ConfigService
  ) { }

  ngOnInit(): void {

  }

  toggleChangePixelated(event: any) {
    console.log('event', event);
    this.configService.pixelated = !event.checked;
  }

  toggleChangeRealSize(event: any) {
    console.log('event', event);
    this.configService.realSize = event.checked;
  }

  reset() {
    this.pixelatedToggle.checked = false;
    this.realSizeToggle.checked = false;
  }

}
