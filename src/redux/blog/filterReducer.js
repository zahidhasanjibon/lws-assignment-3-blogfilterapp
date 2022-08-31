import { CLEARFILTER, SEARCHBYAUTHOR, SEARCHBYCATEGORY, SEARCHBYTITLE } from "./action";
import initialState from "./initialState";



const filterReducer = (state = initialState,action) => {

    switch (action.type) {
        case SEARCHBYCATEGORY:
            
        return state.filter((blog) => {
            return blog.category === action.payload
        })
        
        case SEARCHBYAUTHOR:
        return state.filter((blog) => {
            return blog.author === action.payload
        })
        case SEARCHBYTITLE:

        return initialState.filter((blog) => {
            return blog.title.toLowerCase().includes(action.payload.toString().toLowerCase())
        })

            case CLEARFILTER:
                return [...initialState]
        default:
            return state
    }


}

export default filterReducer