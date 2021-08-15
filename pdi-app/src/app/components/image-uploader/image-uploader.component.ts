import { Component, ElementRef, ViewChild } from '@angular/core';
import { ImageProcessorService } from 'src/app/services/image-processor/image-processor.service';
import { UploaderService, Image } from 'src/app/services/uploader/uploader.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent {

  @ViewChild('imagePreviewElem') imagePreview: ElementRef;
  loaded: boolean = false;

  constructor(
    private uploader: UploaderService,
    private processor: ImageProcessorService
  ) { }

  ngAfterViewInit() {
    this.uploader.loadedImage.subscribe((image) => {
      if (!image) return;
      // console.log('Resulting image is =', image);
      this.loaded = true;
      this.paint(image);
      /** Avisa o serviço de processamento de imagens que uma imagem foi carregada */
      this.processor.reset();
      this.processor.loadedImage.next(image);
    });
  }

  onChange(file: File) {
    if (file) {
      this.uploader.load(file);
    }
  }

  /**
   *  Pinta o canvas com o preview da imagem recebida por parâmetro
   *  @param image Imagem processada pelo loader
   */
  private paint(image: Image) {
    const canvas = this.imagePreview.nativeElement;
    const context = canvas.getContext('2d');

    context.fillStyle = 'black';
    context.fillRect(0, 0, image.width, image.height);

    canvas.width = image.width;
    canvas.height = image.height;
    for (let i = 0; i < image.data.length; i++) {
      if (image.format == "P2") context.fillStyle = `rgb(${image.data[i].r}, ${image.data[i].r}, ${image.data[i].r})`;
      else if (image.format == "P3") context.fillStyle = `rgb(${image.data[i].r}, ${image.data[i].g}, ${image.data[i].b})`;
      context.fillRect(i % image.width, Math.floor(i / image.width), 1, 1);
    }
  }

}
