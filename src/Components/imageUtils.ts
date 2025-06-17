
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const getImageSrc = (imgSrc: string | StaticImport): string => {
  if (typeof imgSrc === 'string') return imgSrc;
  if (typeof imgSrc === 'object' && 'default' in imgSrc) return imgSrc.default.src;
  return '';
};