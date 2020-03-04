import * as types from "actions/types";

const initialState = {
    
};

export default (state = initialState) => {
    switch (action.type) {
        case " ":
            return {...state };
        default:
            return state;
    }
}