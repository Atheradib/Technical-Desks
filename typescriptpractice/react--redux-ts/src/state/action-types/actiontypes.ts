import { actionType } from "./actionType";

interface depositAction {
  type: actionType.Deposit;
  payload: number;
}
interface withdrawAction {
  type: actionType.Withdraw;
  payload: number;
}
interface bankCruptAction {
  type: actionType.BankCrupt;
}

export type Action = depositAction | withdrawAction | bankCruptAction;
