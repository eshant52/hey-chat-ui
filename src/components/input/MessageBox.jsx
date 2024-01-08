export default function MessageBox() {
  return (
    <div className="flex h-full">
      <label className="grow">
        <span className="sr-only">Message</span>
        <textarea
          className="h-full w-full resize-none rounded-md border border-slate-300 bg-white px-3 py-2 outline-none placeholder:italic placeholder:text-slate-400 placeholder: focus:border-sky-500 focus:ring-1 focus:ring-sky-400"
          placeholder="message"
          rows={1}
        ></textarea>
      </label>
    </div>
  );
}
