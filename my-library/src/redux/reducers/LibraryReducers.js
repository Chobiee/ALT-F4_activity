import{ActionTypes} from "../constants/Action-types";


const initialState ={
    students: [
        {
            id:1,
            lastname: 'Farul',
            firstname:'Hannah'
        },

        {
            id:2,
            lastname: 'Sabit',
            firstname:'Lance'
        }
    ],

}
const initialStates ={

    books: [
        {
            id:1,
            bookname: 'P1',
            description:'Programming 1',
            status: 'Available'
        },

        {
            id:2,
            bookname: 'P2',
            description:'Programming 2',
            status: 'Not Available'
        }
    ]
}



export const LibraryReducers = (state=initialState, {type,payload}) => {
 switch (type) {
    case ActionTypes.SET_STUDENTS:
        return {...state,students:payload};

    default:
        return state;
  }
}

export const BookReducers = (state=initialStates, {type,payload}) => {
    switch (type) {
       case ActionTypes.SET_BOOKS:
           return {...state,books:payload};
   
       default:
           return state;
     }
   }
   
   