import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

export class Pixel {
  /** Para imagens em escala de cinza, r representa a intensidade do branco */
  r: number;
  g: number;
  b: number;
}

export class Image {
  /** Formatos suportados no momento são: P2 */
  format: string;
  /** Valor máximo de intensidade presente na imagem */
  max: number;
  /** Largura em pixels */
  width: number;
  /** Altura em pixels */
  height: number;
  /** Lista de Pixels */
  data: Pixel[] = [];
};

@Injectable({
  providedIn: "root"
})
export class UploaderService {

  loadedImage = new BehaviorSubject(null);

  constructor() { }

  load(file: File) {
    console.log('Ready to load', file);

    const reader:FileReader = new FileReader();

    let image = new Image();

    reader.onloadend = (e) => {
      const imageData = String(reader.result).split("\n");
      // console.log('imageData =', imageData);
      if (imageData[0].toUpperCase() != "P2") {
        throw "Formato não suportado. Os formatos suportados são: [P2]";
      }
      image.format = imageData[0];
      let dimensions = imageData[1].split(" ");
      /** Caso as dimensões estejam em linhas diferentes ao invés de na mesma linha, os índices são atribuídos de forma diferente */
      if (dimensions.length === 1) {
        /** Caso as dimensões estejam em linhas diferentes */
        image.width = Number(imageData[1]);
        image.height = Number(imageData[2]);
        image.max = Number(imageData[3]);
      } else {
        /** Caso as dimensões estejam na mesma linha e separados por um espaço */
        image.width = Number(dimensions[0]);
        image.height = Number(dimensions[1]);
        image.max = Number(imageData[2]);
      }

      for (let i = 4; i < imageData.length; i++) {
        const pixel = new Pixel();
        pixel.r = Number(imageData[i]);
        image.data.push(pixel);
      }
      // console.log('imageData =', image);

      this.loadedImage.next(image);
    }

    reader.readAsText(file);
  }
}
