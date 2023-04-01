import { GET_ASSET_CATEGORY,
         GET_ASSETS,
         GET_MY_RESERVATION,
         GET_RESERVATION,
         PUT_RESERVATION,
         DELETE_RESERVATION,
         GET_RESERVATIONS,
         GET_RESERVATIONS_BY_DATE,
         GET_MEMBER_INFO,
         POST_RESERVATION } from "../modules/ReservationModule";

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

export const callReservationUpdateAPI = ({form, reservationNo}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reservation/${reservationNo}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            },
            body : JSON.stringify({
                startTime : form.startTime.toLocaleString(),
                endTime : form.endTime.toLocaleString(),
                reservationDate : form.reservationDate,
                description : form.description
            })
        }).then(response => response.json());

        if(result.status === 200) {
            console.log('[AddBookAPICalls] callReservationUpdateAPI RESULT', result);
            dispatch({type : PUT_RESERVATION, payload : result});
        }
    }
}

export const callReservationDeleteAPI = ({reservationNos}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reservation`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            },
            body : JSON.stringify({
                reservationNos : reservationNos
            })
        }).then(response => response.json());

        if(result.status === 200) {
            console.log('[AddBookAPICalls] callReservationDeleteAPI RESULT', result);
            dispatch({type : DELETE_RESERVATION, payload : result});
        }
    }
}

export const callReservationsAPI = ({assetCode, startTime, endTime}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reservations/${assetCode}?startTime=${startTime}&endTime=${endTime}`;

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
            console.log('[AddBookAPICalls] callReservationsAPI RESULT', result);
            dispatch({type : GET_RESERVATIONS, payload : result.data});
        }
    }
}

export const callReservationByDateAPI = ({assetCode, startDateTime, endDateTime}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reservations/${assetCode}/date?startDateTime=${startDateTime}&endDateTime=${endDateTime}`;

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
            console.log('[AddBookAPICalls] callReservationByDateAPI RESULT', result);
            dispatch({type : GET_RESERVATIONS_BY_DATE, payload : result.data});
        }
    }
}

export const callMemberInfoForRegist = ({memberCode}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reservation/member-info/${memberCode}`;

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
            console.log('[AddBookAPICalls] callMemberInfoForRegist RESULT', result);
            dispatch({type : GET_MEMBER_INFO, payload : result.data});
        }
    }
}

export const callReservationRegistAPI = ({form}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reservation`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            },
            body : JSON.stringify({
                assetCode : form.assetCode,
                memberCode : form.memberCode,
                team : form.team,
                reservationDate : form.reservationDate,
                startTime : form.startTime,
                endTime : form.endTime,
                description : form.description
            })
        }).then(response => response.json());

        if(result.status === 200) {
            console.log('[AddBookAPICalls] callReservationRegistAPI RESULT', result);
            dispatch({type : POST_RESERVATION, payload : result});
        }
    }
}