import { Person } from "@mui/icons-material";

/* eslint-disable react/prop-types */
export default function Avatar({ style, src, className, demoSize, ...props }) {
  return (
    (src && (
      <img
        style={style}
        className={`inline-block size-12 rounded-full ring-2 ring-white ${className}`}
        src={src}
        {...props}
      />
    )) || (
      <span
        className={`flex justify-center items-center size-12 rounded-full ring-2 ring-white ${className}`}
        {...props}
      >
        <Person fontSize={demoSize}/>
      </span>
    )
  );
}
