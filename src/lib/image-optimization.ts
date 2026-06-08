/**
 * Image Optimization Utilities
 */

export const IMAGE_SIZES = {
  thumbnail: 100,
  small: 320,
  medium: 640,
  large: 1280,
  xlarge: 1920,
};

export const IMAGE_QUALITY = {
  low: 60,
  medium: 75,
  high: 85,
  maximum: 95,
};

export function getImageSrcSet(
  src: string,
  sizes: number[] = [320, 640, 1280]
) {
  return sizes.map((size) => `${src}?w=${size} ${size}w`).join(', ');
}

export function getImageSizes() {
  return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
}

/**
 * Image placeholder for better loading experience
 */
export function getImageBlurDataURL() {
  return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630"%3E%3Crect fill="%23f3f4f6" width="1200" height="630"/%3E%3C/svg%3E';
}
