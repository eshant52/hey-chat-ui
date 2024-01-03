/* eslint-disable react/prop-types */
export default function Avatar({ style, src, alt, className }) {
  return (
    <img
      style={style}
      className={`inline-block h-12 w-12 rounded-full ring-2 ring-white ${className}`}
      src={src}
      alt={alt}
    />
  );
}
