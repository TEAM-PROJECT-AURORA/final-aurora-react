import { GET_ASSET_CATEGORY,
         GET_ASSETS,
         GET_MY_RESERVATION,
         GET_RESERVATION } from "../modules/ReservationModule";

export const callAssetCategoryAPI = () => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reservation/asset-category`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            }
        }).then(response => response.json());

        if(result.status === 200) {
            console.log('[AddBookAPICalls] callAssetCategoryAPI RESULT', result);
            dispatch({type : GET_ASSET_CATEGORY, payload : result.data});
        }
    }
}

export const callAllAssetsAPI = () => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reservation/assets`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            }
        }).then(response => response.json());

        if(result.status === 200) {
            console.log('[AddBookAPICalls] callAllAssetsAPI RESULT', result);
            dispatch({type : GET_ASSETS, payload : result.data});
        }
    }
}

export const callMyReservationAPI = ({memberCode, currentPage}) => {
    
    let requestURL;

    if(currentPage !== undefined || currentPage !== null) {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reservation/my-reservation/${memberCode}?offset=${currentPage}`;
    } else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reservation/my-reservation/${memberCode}?`;
    }

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            }
        }).then(response => response.json());

        if(result.status === 200) {
            console.log('[AddBookAPICalls] callMyReservationAPI RESULT', result);
            dispatch({type : GET_MY_RESERVATION, payload : result.data});
        }
    }
}

export const callReservationAPI = ({reservationNo}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reservation/${reservationNo}`;
    
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            }
        }).then(response => response.json());

        if(result.status === 200) {
            console.log('[AddBookAPICalls] callReservationAPI RESULT', result);
            dispatch({type : GET_RESERVATION, payload : result.data});
        }
    }
}