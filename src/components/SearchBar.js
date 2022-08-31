import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import searchSvg from "../assets/search.svg";
import UseDebounce from "../hook/UseDebounce";
import { searchByTitle } from "../redux/blog/actionType";
export default function SearchBar() {
  const dispatch = useDispatch()
  const [inp,setInp] = useState('')
  const debounceSearch = UseDebounce(inp, 1500);

  useEffect(() => {
    if (debounceSearch) {
      dispatch(searchByTitle(debounceSearch));
    }
  }, [debounceSearch, dispatch]);


  return (
    <div
    className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
  >
    <input value={inp} onChange={(e) => setInp(e.target.value)}
      className="outline-none border-none bg-gray-50 h-full w-full mr-2"
      type="search"
      name="search"
      placeholder="Search"
    />
    <img
      className="inline h-6 cursor-pointer"
      src={searchSvg}
      alt="Search"
    />
  </div>
  )
}
