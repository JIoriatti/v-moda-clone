import { ACTIONS } from "./actions";

export const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.SET_IS_TOP_OF_PAGE:
            return {...state, isTopOfPage : action.payload}
        case ACTIONS.SET_SELECTED_NAV:
            return {...state, selectedNav: action.payload}
        case ACTIONS.SET_IS_DROPDOWN_OPEN:
            return {...state, isDropdownOpen: action.payload}
        default:
            throw new Error();
    }
}