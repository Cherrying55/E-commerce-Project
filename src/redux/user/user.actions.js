import UserActionTypes from "./user.actiontypes"

export function loginaction(data){
    return({
        type: UserActionTypes.LOGIN,
        payload: {...data}
    })
}
