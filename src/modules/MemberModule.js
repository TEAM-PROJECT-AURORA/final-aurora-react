import { createActions, handleActions } from "redux-actions";

// 초기값
const initialState = {
    memberLogin: [],
    memberList: [],
    memberDetail: []
};

// 액션
export const POST_LOGIN = 'member/POST_LOGIN';
export const GET_LIST = 'member/GET_LIST';
export const GET_DETAIL = 'member/GET_DETAIL';

// eslint-disable-next-line
const actions = createActions({
    [POST_LOGIN]: () => { },
    [GET_LIST]: () => { },
    [GET_DETAIL]: () => { }

});

// 리듀서
const memberReducer = handleActions({
    [POST_LOGIN]: (state, { payload }) => {
        return {
            ...state,
            memberLogin: payload
        }
    },
    [GET_LIST]: (state, { payload }) => {
        return {
            ...state,
            memberList: payload
        }
    },
    [GET_DETAIL]: (state, { payload }) => {
        return {
            ...state,
            memberDetail: payload
        }
    }


}, initialState)

export default memberReducer;


