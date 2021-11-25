export default function loadPNGFavicon(iconSvg) {
  const link = document.createElement('link');
  link.type = 'image/png';
  link.rel = 'shortcut icon';
  link.href = iconSvg;
  document.head.appendChild(link);
}
