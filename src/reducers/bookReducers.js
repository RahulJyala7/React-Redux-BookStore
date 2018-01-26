//our defaukt state 

 
const books = ( state = [{title : "my first book "}]  , action ) => {
    console.log(action)
    console.log("2")
     switch(action.type){
        case 'CREATE_BOOKS' : 
        return [
            ...state , {title : action.book}
        ];
         default : return state 
    }
   
}


export default  books