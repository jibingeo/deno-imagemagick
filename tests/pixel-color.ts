/* Copyright Dirk Lemstra https://github.com/dlemstra/Magick.WASM */

import { MagickImage } from "../lib/magick-image.ts";
import { PixelChannel } from "../lib/pixel-channel.ts";

function toHex(number: number): string {
  let hex = number.toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

export function pixelColor(image: MagickImage, x: number, y: number): string {
  return image.pixels((pixels) => {
    let channelCount = image.channelCount;
    if (image.channelOffset(PixelChannel.Index) !== -1) {
      channelCount--;
    }

    const pixel = pixels.getArea(x, y, 1, 1);
    let result = "#";

    switch (channelCount) {
      case 1:
        result += toHex(pixel[0]);
        break;
      case 2:
        result += toHex(pixel[image.channelOffset(PixelChannel.Red)]);
        result += toHex(pixel[image.channelOffset(PixelChannel.Alpha)]);
        break;
      case 3:
        result += toHex(pixel[image.channelOffset(PixelChannel.Red)]);
        result += toHex(pixel[image.channelOffset(PixelChannel.Green)]);
        result += toHex(pixel[image.channelOffset(PixelChannel.Blue)]);
        break;
      case 4:
        result += toHex(pixel[image.channelOffset(PixelChannel.Red)]);
        result += toHex(pixel[image.channelOffset(PixelChannel.Green)]);
        result += toHex(pixel[image.channelOffset(PixelChannel.Blue)]);
        result += toHex(pixel[image.channelOffset(PixelChannel.Alpha)]);
        break;
    }

    return result;
  });
}
