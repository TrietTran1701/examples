import { STORE_ACTION } from "./customer-vendor.action"
import { AppAction } from "../../app.action"
import {
  initialCustomerVendorState,
  ICustomerVendorState,
} from "./customer-vendor.state"

export function reducer(
  state = initialCustomerVendorState,
  action: AppAction
): ICustomerVendorState {
  switch (action.type) {
    // #region SEARCH_CUSTOMER_VENDOR
    case STORE_ACTION.SEARCH_CUSTOMER_VENDOR:
      return {
        ...state,
        action: STORE_ACTION.SEARCH_CUSTOMER_VENDOR,
        done: false,
        error: null,
        selected: null,
      }
    case STORE_ACTION.SEARCH_CUSTOMER_VENDOR_ERROR:
      return {
        ...state,
        data: action.payload,
        done: true,
        error: null,
        selected: null,
      }

    case STORE_ACTION.SEARCH_CUSTOMER_VENDOR_SUCCESS:
      return {
        ...state,
        done: true,
        error: action.payload,
        selected: null,
      }
    // #endregion SEARCH_CUSTOMER_VENDOR

    // #region READ_BY_ID_CUSTOMER_VENDOR
    case STORE_ACTION.READ_BY_ID_CUSTOMER_VENDOR:
      return {
        ...state,
        action: STORE_ACTION.READ_BY_ID_CUSTOMER_VENDOR,
        done: false,
        error: null,
        selected: null,
      }
    case STORE_ACTION.READ_BY_ID_CUSTOMER_VENDOR_SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        error: null,
        selected: null,
      }
    case STORE_ACTION.READ_BY_ID_CUSTOMER_VENDOR_ERROR:
      return {
        ...state,
        done: true,
        error: action.payload,
        selected: null,
      }
    // #region READ_BY_ID_CUSTOMER_VENDOR

    // #region CREATE_CUSTOMER_VENDOR
    case STORE_ACTION.CREATE_CUSTOMER_VENDOR:
      return {
        ...state,
        action: STORE_ACTION.CREATE_CUSTOMER_VENDOR,
        done: false,
        error: null,
        selected: null,
      }
    case STORE_ACTION.CREATE_CUSTOMER_VENDOR_SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        error: null,
        selected: null,
      }
    case STORE_ACTION.CREATE_CUSTOMER_VENDOR_ERROR:
      return {
        ...state,
        done: true,
        error: action.payload,
        selected: null,
      }
    // #region CREATE_CUSTOMER_VENDOR

    // #region UPDATE_CUSTOMER_VENDOR
    case STORE_ACTION.UPDATE_CUSTOMER_VENDOR:
      return {
        ...state,
        action: STORE_ACTION.UPDATE_CUSTOMER_VENDOR,
        done: false,
        error: null,
        selected: null,
      }
    case STORE_ACTION.UPDATE_CUSTOMER_VENDOR_SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        error: null,
        selected: null,
      }
    case STORE_ACTION.UPDATE_CUSTOMER_VENDOR_ERROR:
      return {
        ...state,
        done: true,
        error: action.payload,
        selected: null,
      }
    // #region UPDATE_CUSTOMER_VENDOR

    // #region EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR
    case STORE_ACTION.EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR:
      return {
        ...state,
        action: STORE_ACTION.EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR,
        done: false,
        error: null,
        selected: null,
      }
    case STORE_ACTION.EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR_SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        error: null,
        selected: null,
      }
    case STORE_ACTION.EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR_ERROR:
      return {
        ...state,
        done: true,
        error: action.payload,
        selected: null,
      }
    // #region EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR
  }
  return state
}
