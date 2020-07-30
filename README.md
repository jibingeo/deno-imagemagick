# deno-imagemagick

> Ported from [Magick.WASM](https://github.com/dlemstra/Magick.WASM)

This is a beta, there's a lot of features missing, but is a starting point

## Example

```typescript
import {
  initializeImageMagick,
  ImageMagick,
  MagickImage,
  MagickFormat
} from "https://deno.land/x/deno_imagemagick/mod.ts"

await initializeImageMagick(); // make sure to initialize first!

const lena: Uint8Array = await Deno.readFile('lena.jpg');

ImageMagick.read(lena, (img: MagickImage) => {
  img.blur(20, 6);
  img.resize(200, 100);

  img.write((data: Uint8Array) => {
    // do something
  }, MagickFormat.Jpeg);
});
```

## Live Example

Make sure to have [denon](https://deno.land/x/denon) installed.

```bash
$ cd demo
$ denon start
```

