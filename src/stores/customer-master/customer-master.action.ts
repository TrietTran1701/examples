import { Action } from "@ngrx/store"
import { ErrorModel } from "src/app/core/models/error.model"
import { ImportExcelReq } from "src/app/core/models/import-excel.req"
import { PagingResponse } from "src/app/core/models/paging.res"
import { CustomerMasterSearchReq } from "src/app/models/request/customer-master/customer-master-search.req"
import { CustomerMasterUpdateReq } from "src/app/models/request/customer-master/customer-master-update.req"
import { CustomerMasterSearchRes } from "src/app/models/response/customer-master/customer-master-search.res"
import { CustomerMasterRes } from "src/app/models/response/customer-master/customer-master.res"

export const STORE_ACTION = {
  SEARCH_CustomerMaster: "[CustomerMaster] SEARCH_CustomerMaster",
  SEARCH_CustomerMaster_ERROR: "[CustomerMaster] SEARCH_CustomerMaster_ERROR",
  SEARCH_CustomerMaster_SUCCESS: "[CustomerMaster] SEARCH_CustomerMaster_SUCCESS",

  READ_BY_ID_CustomerMaster: "[CustomerMaster] READ_BY_ID_CustomerMaster",
  READ_BY_ID_CustomerMaster_ERROR: "[CustomerMaster] READ_BY_ID_CustomerMaster_ERROR",
  READ_BY_ID_CustomerMaster_SUCCESS: "[CustomerMaster] READ_BY_ID_CustomerMaster_SUCCESS",

  UPDATE_CustomerMaster: "[CustomerMaster]  UPDATE_CustomerMaster",
  UPDATE_CustomerMaster_ERROR: "[CustomerMaster]  UPDATE_CustomerMaster_ERROR",
  UPDATE_CustomerMaster_SUCCESS: "[CustomerMaster]  UPDATE_CustomerMaster_SUCCESS",

  EXPORT_EXCEL_TEMPLATE_CustomerMaster: "[CustomerMaster] EXPORT_EXCEL_TEMPLATE_CustomerMaster",
  EXPORT_EXCEL_TEMPLATE_CustomerMaster_ERROR:
    "[CustomerMaster] EXPORT_EXCEL_TEMPLATE_CustomerMasterERROR",
  EXPORT_EXCEL_TEMPLATE_CustomerMaster_SUCCESS:
    "[CustomerMaster] EXPORT_EXCEL_TEMPLATE_CustomerMasterSUCCESS",

  IMPORT_UPDATE_CustomerMaster: "[CustomerMaster] IMPORT_UPDATE_CustomerMaster",
  IMPORT_UPDATE_CustomerMaster_ERROR: "[CustomerMaster] IMPORT_UPDATE_CustomerMaster_ERROR",
  IMPORT_UPDATE_CustomerMaster_SUCCESS: "[CustomerMaster] IMPORT_UPDATE_CustomerMaster_SUCCESS",
}

//#region SEARCH_CustomerMaster
export class SearchCustomerMasterAction implements Action {
  readonly type = STORE_ACTION.SEARCH_CustomerMaster
  constructor(public payload: CustomerMasterSearchReq) {}
}
export class SearchCustomerMasterActionSuccess implements Action {
  readonly type = STORE_ACTION.SEARCH_CustomerMaster_SUCCESS
  constructor(public payload: PagingResponse<CustomerMasterSearchRes>) {}
}
export class SearchCustomerMasterActionError implements Action {
  readonly type = STORE_ACTION.SEARCH_CustomerMaster_ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion SEARCH_CustomerMaster

//#region READ_BY_ID
export class ReadByIDCustomerMasterAction implements Action {
  readonly type = STORE_ACTION.READ_BY_ID_CustomerMaster
  constructor(public payload: number) {}
}
export class ReadByIDCustomerMasterActionSuccess implements Action {
  readonly type = STORE_ACTION.READ_BY_ID_CustomerMaster_SUCCESS
  constructor(public payload: CustomerMasterRes) {}
}
export class ReadByIDCustomerMasterActionError implements Action {
  readonly type = STORE_ACTION.READ_BY_ID_CustomerMaster_ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion READ_BY_ID

//#region UPDATE
export class UpdateCustomerMasterAction implements Action {
  readonly type = STORE_ACTION.UPDATE_CustomerMaster
  constructor(public payload: CustomerMasterUpdateReq) {}
}
export class UpdateCustomerMasterActionSuccess implements Action {
  readonly type = STORE_ACTION.UPDATE_CustomerMaster_SUCCESS
  constructor(public payload: Boolean) {}
}
export class UpdateCustomerMasterActionError implements Action {
  readonly type = STORE_ACTION.UPDATE_CustomerMaster_ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion UPDATE

//#region EXPORT_EXCEL_TEMPLATE
export class ExportExcelTemplateCustomerMasterAction implements Action {
  readonly type = STORE_ACTION.EXPORT_EXCEL_TEMPLATE_CustomerMaster
  constructor() {}
}
export class ExportExcelTemplateCustomerMasterActionSuccess implements Action {
  readonly type = STORE_ACTION.EXPORT_EXCEL_TEMPLATE_CustomerMaster_SUCCESS
  constructor(public payload: string) {}
}
export class ExportExcelTemplateCustomerMasterActionError implements Action {
  readonly type = STORE_ACTION.EXPORT_EXCEL_TEMPLATE_CustomerMaster_ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion EXPORT_EXCEL_TEMPLATE

//#region IMPORT_UPDATE_CustomerMaster
export class ImportUpdateCustomerMasterAction implements Action {
  readonly type = STORE_ACTION.IMPORT_UPDATE_CustomerMaster
  constructor(public payload: ImportExcelReq) {}
}
export class ImportUpdateCustomerMasterActionSuccess implements Action {
  readonly type = STORE_ACTION.IMPORT_UPDATE_CustomerMaster_SUCCESS
  constructor(public payload: boolean) {}
}
export class ImportUpdateCustomerMasterActionError implements Action {
  readonly type = STORE_ACTION.IMPORT_UPDATE_CustomerMaster_ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion IMPORT_UPDATE_CustomerMaster

export type Actions =
  | SearchCustomerMasterAction
  | SearchCustomerMasterActionSuccess
  | SearchCustomerMasterActionError
  | ReadByIDCustomerMasterAction
  | ReadByIDCustomerMasterActionSuccess
  | ReadByIDCustomerMasterActionError
  | UpdateCustomerMasterAction
  | UpdateCustomerMasterActionSuccess
  | UpdateCustomerMasterActionError
  | ExportExcelTemplateCustomerMasterAction
  | ExportExcelTemplateCustomerMasterActionSuccess
  | ExportExcelTemplateCustomerMasterActionError
  | ImportUpdateCustomerMasterAction
  | ImportUpdateCustomerMasterActionSuccess
  | ImportUpdateCustomerMasterActionError
