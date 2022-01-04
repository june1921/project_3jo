import {createAction, handleActions} from 'redux-actions';

const INITIALIZE = 'write/INITIALIZE'; //모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; //특정 key값 변환

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key,value}) => ({
    key,
    value,
}));

const initialState = {
    title: '',
    body: '',
    tags: []
};

const write = handleActions (
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, {payload: {key, value}}) => ({
            ...state,
            [key]: value, //특정 key값 업뎃
        })
    },
    initialState
);

export default write;