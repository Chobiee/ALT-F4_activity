import{ActionTypes} from "../constants/Action-types";

export const setStudent = (students) => {
    return{
        type: ActionTypes.SET_STUDENT,
        payload: students,
    };
};

export const setBook = (books) => {
    return{
        type: ActionTypes.SET_BOOKS,
        payload: books,
    };
};

export const setSelectedStudent = (student) => {
    return{
        type: ActionTypes.SELECTED_STUDENT,
        payload: student,
    };
};