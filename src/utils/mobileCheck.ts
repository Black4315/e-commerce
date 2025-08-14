export function isMobileUserAgent(userAgent: string) {
  return /Mobi|Android|iPhone|iPad|iPod|android|iphone|ipad|ipod|windows phone/i.test(userAgent);
}
