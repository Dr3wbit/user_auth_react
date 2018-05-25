import types from '../actions/types';

const DEFAULT_STATE = {
    quote: ''
};

export default (state = DEFAULT_STATE, actions) => {
    switch(actions.type){
        case types.GET_MOVIE_QUOTE:
        return{...state, quote: actions.payload};
        default:
        return state;
    }
}