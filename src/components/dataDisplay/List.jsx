/* eslint-disable react/prop-types */
export function ListView({ children, className, style }) {

  return (
    <ul style={style} className={`${className || ""}`}>
      {children}
    </ul>
  );
}

export function ListContent({children, className }) {
  return (
    <li className={className || ""}>
      {children}
    </li>
  );
}
