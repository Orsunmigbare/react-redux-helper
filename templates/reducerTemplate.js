module.exports = `import * as types from "actions/types";

const initialState = {
    
};

export default (state = initialState, action) => {
    switch (action.type) {
        case " ":
            return {...state };
        default:
            return state;
    }
}`