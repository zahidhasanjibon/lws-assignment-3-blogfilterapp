import { CLEARFILTER, SEARCHBYAUTHOR, SEARCHBYCATEGORY, SEARCHBYTITLE } from "./action"


export const searchByCategory  = (category) => {
    return {
            type:SEARCHBYCATEGORY,
            payload:category
    }
}

export const searchByAuthor = (author) => {
    return {
        type:SEARCHBYAUTHOR,
        payload:author
    }
}

export const searchByTitle = (title) => {
    return {
        type:SEARCHBYTITLE,
        payload:title
    }
}

export const clearfilter = () => {
    return {
        type:CLEARFILTER,
    
    }
}