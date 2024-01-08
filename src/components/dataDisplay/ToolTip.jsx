/* eslint-disable react/prop-types */

export default function ToolTip({ children, title, position = "right" }) {
  let place;

  switch (position) {
    case "top":
      place = "origin-bottom mb-1 left-1/2 bottom-full -translate-x-1/2";
      break;

    case "left":
      place = "origin-right mr-1 right-full top-1/2 -translate-y-1/2";
      break;

    case "bottom":
      place = "origin-top mt-1 top-full left-1/2 -translate-x-1/2";
      break;

    case "right":
      place = "origin-left ml-1 left-full top-1/2 -translate-y-1/2";
      break;

    default:
      break;
  }

  return (
    <div className="group relative">
      <span
        className={`text-pretty absolute z-10 scale-0 rounded-md border bg-white px-1.5 py-1 text-center text-sm shadow-lg transition-all group-hover:delay-1000 group-active:scale-0 group-active:delay-100 group-hover:inline group-hover:scale-100 ${place}`}
      >
        {title}
      </span>
      {children}
    </div>
  );
}
