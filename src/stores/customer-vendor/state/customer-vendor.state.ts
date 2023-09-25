import { IAppState } from "../../app.state"
import { IBaseState } from "../../base.state"

export interface ICustomerVendorState extends IBaseState {}

export const initialCustomerVendorState: ICustomerVendorState = {
  data: [],
  selected: null,
  action: null,
  done: false,
  error: null,
}

export const getCustomerVendorState = (state: IAppState) => state.customerVender
