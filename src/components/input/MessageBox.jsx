/* eslint-disable react/prop-types */
export default function MessageBox({ onChange, value, ...props }) {
  return (
    <div className="flex min-w-72">
      <label className="grow">
        <span className="sr-only">Message</span>
        <textarea
          className=" placeholder: h-full w-full resize-none rounded-full bg-white px-6 py-2 text-font-secondary shadow-sm outline-none drop-shadow-md transition-all delay-200 placeholder:font-light placeholder:italic placeholder:text-slate-400 focus:shadow-sm focus:drop-shadow-sm"
          placeholder="message"
          rows={1}
          onChange={onChange}
          value={value}
          {...props}
        ></textarea>
      </label>
    </div>
  );
}
