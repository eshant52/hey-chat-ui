/* eslint-disable react/prop-types */
export default function Button({
  children,
  className,
  icon,
  positionIcon="left",
  ...props
}) {
  return (
    <button className={`${className} || ""`} {...props}>
      {positionIcon === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {positionIcon === "right" && <span>{icon}</span>}
    </button>
  );
}
