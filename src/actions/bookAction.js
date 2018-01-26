//Triggred by UI 
export const addBook = (book) => {
  console.log("1")
     return {
       // Unique identifier 
       type : "CREATE_BOOKS" ,

       // Payload
       book : book 

    }
 }

 export default addBook