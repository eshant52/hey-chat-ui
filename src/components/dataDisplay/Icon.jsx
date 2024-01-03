/* eslint-disable react/prop-types */
export default function Icon({src, alt, className}) {
  return <img className={`${className || 'h-8 w-8'}`} src={src} alt={alt} />;
}
