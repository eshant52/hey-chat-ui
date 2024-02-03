import { Search } from "@mui/icons-material";

export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <label className="relative block grow">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <div className="w-1">
            <Search sx={{color: "gray"}}/>
          </div>
        </span>
        <input
          className="transition-all block w-full rounded-md border-slate-300 bg-white py-2 pl-9 pr-3 shadow-md placeholder:italic placeholder:text-slate-400 outline-none focus: focus:shadow-sm sm:text-sm"
          placeholder="Search..."
          type="search"
          name="search"
        />
      </label>
    </div>
  );
}
