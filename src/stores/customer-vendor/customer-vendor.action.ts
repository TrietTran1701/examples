import { Action } from "@ngrx/store"
import { ErrorModel } from "src/app/core/models/error.model"
import { ImportExcelReq } from "src/app/core/models/import-excel.req"
import { PagingResponse } from "src/app/core/models/paging.res"
import { CustomerVendorSearchReq } from "./models/request/customer-vendor-search.req"
import { CustomerVendorUpdateReq } from "./models/request/customer-vendor-update.req"
import { CustomerVendorSearchRes } from "./models/response/customer-vendor-search.res"
import { CustomerVendorRes } from "./models/response/customer-vendor.res"

export const STORE_ACTION = {
  SEARCH_CUSTOMER_VENDOR: "[CUSTOMER_VENDOR] SEARCH_CUSTOMER_VENDOR",
  SEARCH_CUSTOMER_VENDOR_ERROR: "[CUSTOMER_VENDOR] SEARCH_CUSTOMER_VENDOR_ERROR",
  SEARCH_CUSTOMER_VENDOR_SUCCESS: "[CUSTOMER_VENDOR] SEARCH_CUSTOMER_VENDOR_SUCCESS",

  READ_BY_ID_CUSTOMER_VENDOR: "[CUSTOMER_VENDOR] READ_BY_ID_CUSTOMER_VENDOR",
  READ_BY_ID_CUSTOMER_VENDOR_ERROR: "[CUSTOMER_VENDOR] READ_BY_ID_CUSTOMER_VENDOR_ERROR",
  READ_BY_ID_CUSTOMER_VENDOR_SUCCESS: "[CUSTOMER_VENDOR] READ_BY_ID_CUSTOMER_VENDOR_SUCCESS",

  UPDATE_CUSTOMER_VENDOR: "[CUSTOMER_VENDOR] UPDATE_CUSTOMER_VENDOR",
  UPDATE_CUSTOMER_VENDOR_ERROR: "[CUSTOMER_VENDOR] UPDATE_CUSTOMER_VENDOR_ERROR",
  UPDATE_CUSTOMER_VENDOR_SUCCESS: "[CUSTOMER_VENDOR] UPDATE_CUSTOMER_VENDOR_SUCCESS",

  EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR:
    "[CUSTOMER_VENDOR] EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR",
  EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR_ERROR:
    "[CUSTOMER_VENDOR] EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDORERROR",
  EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR_SUCCESS:
    "[CUSTOMER_VENDOR] EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDORSUCCESS",

  IMPORT_UPDATE_CUSTOMER_VENDOR: "[CUSTOMER_VENDOR] IMPORT_UPDATE_CUSTOMER_VENDOR",
  IMPORT_UPDATE_CUSTOMER_VENDOR_ERROR: "[CUSTOMER_VENDOR] IMPORT_UPDATE_CUSTOMER_VENDOR_ERROR",
  IMPORT_UPDATE_CUSTOMER_VENDOR_SUCCESS:
    "[CUSTOMER_VENDOR] IMPORT_UPDATE_CUSTOMER_VENDOR_SUCCESS",
}

//#region SEARCH_CustomerVendor
export class SearchCustomerVendorAction implements Action {
  readonly type = STORE_ACTION.SEARCH_CUSTOMER_VENDOR
  constructor(public payload: CustomerVendorSearchReq) {}
}
export class SearchCustomerVendorActionSuccess implements Action {
  readonly type = STORE_ACTION.SEARCH_CUSTOMER_VENDOR_SUCCESS
  constructor(public payload: PagingResponse<CustomerVendorSearchRes>) {}
}
export class SearchCustomerVendorActionError implements Action {
  readonly type = STORE_ACTION.SEARCH_CUSTOMER_VENDOR_ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion SEARCH_CustomerVendor

//#region READ_BY_ID
export class ReadByIDCustomerVendorAction implements Action {
  readonly type = STORE_ACTION.READ_BY_ID_CUSTOMER_VENDOR
  constructor(public payload: number) {}
}
export class ReadByIDCustomerVendorActionSuccess implements Action {
  readonly type = STORE_ACTION.READ_BY_ID_CUSTOMER_VENDOR_SUCCESS
  constructor(public payload: CustomerVendorRes) {}
}
export class ReadByIDCustomerVendorActionError implements Action {
  readonly type = STORE_ACTION.READ_BY_ID_CUSTOMER_VENDOR_ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion READ_BY_ID

//#region UPDATE
export class UpdateCustomerVendorAction implements Action {
  readonly type = STORE_ACTION.UPDATE_CUSTOMER_VENDOR
  constructor(public payload: CustomerVendorUpdateReq) {}
}
export class UpdateCustomerVendorActionSuccess implements Action {
  readonly type = STORE_ACTION.UPDATE_CUSTOMER_VENDOR_SUCCESS
  constructor(public payload: Boolean) {}
}
export class UpdateCustomerVendorActionError implements Action {
  readonly type = STORE_ACTION.UPDATE_CUSTOMER_VENDOR_ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion UPDATE

//#region EXPORT_EXCEL_TEMPLATE
export class ExportExcelTemplateCustomerVendorAction implements Action {
  readonly type = STORE_ACTION.EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR
  constructor() {}
}
export class ExportExcelTemplateCustomerVendorActionSuccess implements Action {
  readonly type = STORE_ACTION.EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR_SUCCESS
  constructor(public payload: string) {}
}
export class ExportExcelTemplateCustomerVendorActionError implements Action {
  readonly type = STORE_ACTION.EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR_ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion EXPORT_EXCEL_TEMPLATE

//#region IMPORT_UPDATE_CustomerVendor
export class ImportUpdateCustomerVendorAction implements Action {
  readonly type = STORE_ACTION.IMPORT_UPDATE_CUSTOMER_VENDOR
  constructor(public payload: ImportExcelReq) {}
}
export class ImportUpdateCustomerVendorActionSuccess implements Action {
  readonly type = STORE_ACTION.IMPORT_UPDATE_CUSTOMER_VENDOR_SUCCESS
  constructor(public payload: boolean) {}
}
export class ImportUpdateCustomerVendorActionError implements Action {
  readonly type = STORE_ACTION.IMPORT_UPDATE_CUSTOMER_VENDOR_ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion IMPORT_UPDATE_CustomerVendor

export type Actions =
  | SearchCustomerVendorAction
  | SearchCustomerVendorActionSuccess
  | SearchCustomerVendorActionError
  | ReadByIDCustomerVendorAction
  | ReadByIDCustomerVendorActionSuccess
  | ReadByIDCustomerVendorActionError
  | UpdateCustomerVendorAction
  | UpdateCustomerVendorActionSuccess
  | UpdateCustomerVendorActionError
  | ExportExcelTemplateCustomerVendorAction
  | ExportExcelTemplateCustomerVendorActionSuccess
  | ExportExcelTemplateCustomerVendorActionError
  | ImportUpdateCustomerVendorAction
  | ImportUpdateCustomerVendorActionSuccess
  | ImportUpdateCustomerVendorActionError
