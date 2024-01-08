import { Person } from "@mui/icons-material";

/* eslint-disable react/prop-types */
export default function Avatar({ style, src, alt, className }) {
  return (
    (src && (
      <img
        style={style}
        className={`inline-block size-12 rounded-full ring-2 ring-white ${className}`}
        src={src}
        alt={alt}
      />
    )) || (
      <span
        className={`flex justify-center items-center size-12 rounded-full ring-2 ring-white ${className}`}

      >
        <Person fontSize="large"/>
      </span>
    )
  );
}
