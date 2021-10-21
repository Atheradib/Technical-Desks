import { actionType } from "../action-types/actionType";
import { Dispatch } from "react";
import { Action } from "../action-types/actiontypes";

export const depositMoney=(amount:number)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type: actionType.Deposit,
            payload: amount
        })
    }
}
export const withdrawMoney=(amount:number)=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type: actionType.Withdraw,
            payload: amount
        })
    }
}
export const bankCrupt=()=>{
    return (dispatch:Dispatch<Action>)=>{
        dispatch({
            type: actionType.BankCrupt,
           
        })
    }
}