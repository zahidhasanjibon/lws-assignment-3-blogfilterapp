
import { useDispatch } from "react-redux"
import { searchByAuthor, searchByCategory } from "../redux/blog/actionType"
export default function SingleCard({card}) {


  const dispatch = useDispatch()
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-shrink-0">
      <img
        className="h-48 w-full object-cover"
        src={card.image}
        alt="card"
      />
    </div>

    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-indigo-600">
          <span onClick={() => dispatch(searchByCategory(card.category))}
            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
          >
            {card.category}
          </span>
        </p>
        <p className="block mt-1">
          <p className="text-xl font-semibold text-gray-900">
            {card.title}
          </p>
        </p>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex-shrink-0">
          <img onClick={() => dispatch(searchByAuthor(card.author))}
            className="h-10 w-10 rounded-full cursor-pointer"
            src={card.image}
            alt=""
          />
        </div>
        <div className="ml-3">
          <p onClick={() => dispatch(searchByAuthor(card.author))} className="text-sm font-medium text-gray-900 hover:underline  hover:cursor-pointer">
            {card.author}
          </p>
          <div className="flex space-x-1 text-sm text-gray-500">
            <time datetime="2020-03-16">11 Jul, 2022 </time>
            <span aria-hidden="true"> &middot; </span>
            <span> 6 min read </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
