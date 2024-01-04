export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <label className="relative block grow">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-400" viewBox="0 0 20 20"></svg>
        </span>
        <input
          className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          placeholder="Search..."
          type="search"
          name="search"
        />
      </label>
    </div>
  );
}
