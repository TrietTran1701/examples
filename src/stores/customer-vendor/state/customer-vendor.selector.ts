import { createSelector } from "@ngrx/store"
import { STORE_ACTION } from "./customer-vendor.action"
import { ICustomerVendorState, getCustomerVendorState } from "./customer-vendor.state"

// #region SEARCH_CUSTOMER_VENDOR
export const searchCustomerVendorSuccess = createSelector(
  getCustomerVendorState,
  (state: ICustomerVendorState) => {
    if (
      state.action === STORE_ACTION.SEARCH_CUSTOMER_VENDOR &&
      state.done &&
      !state.error
    ) {
      return state.data
    } else {
      return null
    }
  }
)

export const searchCustomerVendorError = createSelector(
  getCustomerVendorState,
  (state: ICustomerVendorState) => {
    return state.action === STORE_ACTION.SEARCH_CUSTOMER_VENDOR ? state.error : null
  }
)
// #endregion SEARCH_CUSTOMER_VENDOR

// #region READ_BY_ID_CUSTOMER_VENDOR
export const readByIDCustomerVendorSuccess = createSelector(
  getCustomerVendorState,
  (state: ICustomerVendorState) => {
    if (
      state.action === STORE_ACTION.READ_BY_ID_CUSTOMER_VENDOR &&
      state.done &&
      !state.error
    ) {
      return state.data
    } else {
      return null
    }
  }
)
export const readByIDCustomerVendorError = createSelector(
  getCustomerVendorState,
  (state: ICustomerVendorState) => {
    return state.action === STORE_ACTION.READ_BY_ID_CUSTOMER_VENDOR
      ? state.error
      : null
  }
)
// #endregion READ_BY_ID_CUSTOMER_VENDOR

// #region CREATE_CUSTOMER_VENDOR
export const createCustomerVendorSuccess = createSelector(
  getCustomerVendorState,
  (state: ICustomerVendorState) => {
    if (
      state.action === STORE_ACTION.CREATE_CUSTOMER_VENDOR &&
      state.done &&
      !state.error
    ) {
      return state.data
    } else {
      return null
    }
  }
)
export const createCustomerVendorError = createSelector(
  getCustomerVendorState,
  (state: ICustomerVendorState) => {
    return state.action === STORE_ACTION.CREATE_CUSTOMER_VENDOR ? state.error : null
  }
)
// #endregion CREATE_CUSTOMER_VENDOR

// #region UPDATE_CUSTOMER_VENDOR
export const updateCustomerVendorSuccess = createSelector(
  getCustomerVendorState,
  (state: ICustomerVendorState) => {
    if (
      state.action === STORE_ACTION.UPDATE_CUSTOMER_VENDOR &&
      state.done &&
      !state.error
    ) {
      return state.data
    } else {
      return null
    }
  }
)
export const updateCustomerVendorError = createSelector(
  getCustomerVendorState,
  (state: ICustomerVendorState) => {
    return state.action === STORE_ACTION.UPDATE_CUSTOMER_VENDOR ? state.error : null
  }
)
// #endregion UPDATE_CUSTOMER_VENDOR

// #region EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR
export const exportExcelTemplateCustomerVendorSuccess = createSelector(
  getCustomerVendorState,
  (state: ICustomerVendorState) => {
    if (
      state.action === STORE_ACTION.EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR &&
      state.done &&
      !state.error
    ) {
      return state.data
    } else {
      return null
    }
  }
)
export const exportExcelTemplateCustomerVendorError = createSelector(
  getCustomerVendorState,
  (state: ICustomerVendorState) => {
    return state.action === STORE_ACTION.EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR
      ? state.error
      : null
  }
)
// #endregion EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR
