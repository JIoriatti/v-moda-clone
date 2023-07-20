import { ACTIONS } from "./actions";

export const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.SET_IS_TOP_OF_PAGE:
            return {...state, isTopOfPage : action.payload}
        default:
            throw new Error();
    }
}