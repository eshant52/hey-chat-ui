/* eslint-disable react/prop-types */
export default function List({ children, ...props }) {
  return <ul {...props}>{children}</ul>;
}

export function ListContent({ children, ...props }) {
  return <li {...props}>{children}</li>;
}
