import { Action } from "../action-types/actiontypes"
import { actionType } from "../action-types/actionType";




const initialState=0

const reducer=(state:number=initialState,action:Action)=>{
    switch(action.type){
        case actionType.Deposit:
    return state+action.payload;
     case actionType.Withdraw:
     return state-action.payload;
     case actionType.BankCrupt:
         return 0;
        default:
        return state 
    }

}
 export default reducer;
