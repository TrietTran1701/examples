import { Action } from "@ngrx/store"
import { ErrorModel } from "src/app/core/models/error.model"
import { ImportExcelReq } from "src/app/core/models/import-excel.req"
import { PagingResponse } from "src/app/core/models/paging.res"
import { __model__SearchReq } from "src/app/models/request/__model__(kebabCase)/__model__(kebabCase)-search.req"
import { __model__UpdateReq } from "src/app/models/request/__model__(kebabCase)/__model__(kebabCase)-update.req"
import { __model__SearchRes } from "src/app/models/response/__model__(kebabCase)/__model__(kebabCase)-search.res"
import { __model__Res } from "src/app/models/response/__model__(kebabCase)/__model__(kebabCase).res"

export const STORE_ACTION = {
  SEARCH___name__: "[__name__] SEARCH___name__",
  SEARCH___name___ERROR: "[__name__] SEARCH___name___ERROR",
  SEARCH___name___SUCCESS: "[__name__] SEARCH___name___SUCCESS",

  READ_BY_ID___name__: "[__name__] READ_BY_ID___name__",
  READ_BY_ID___name___ERROR: "[__name__] READ_BY_ID___name___ERROR",
  READ_BY_ID___name___SUCCESS: "[__name__] READ_BY_ID___name___SUCCESS",

  UPDATE___name__: "[__name__]  UPDATE___name__",
  UPDATE___name___ERROR: "[__name__]  UPDATE___name___ERROR",
  UPDATE___name___SUCCESS: "[__name__]  UPDATE___name___SUCCESS",

  EXPORT_EXCEL_TEMPLATE___name__: "[__name__] EXPORT_EXCEL_TEMPLATE___name__",
  EXPORT_EXCEL_TEMPLATE___name___ERROR:
    "[__name__] EXPORT_EXCEL_TEMPLATE___name__ERROR",
  EXPORT_EXCEL_TEMPLATE___name___SUCCESS:
    "[__name__] EXPORT_EXCEL_TEMPLATE___name__SUCCESS",

  IMPORT_UPDATE___name__: "[__model__] IMPORT_UPDATE___name__",
  IMPORT_UPDATE___name___ERROR: "[__name__] IMPORT_UPDATE___name___ERROR",
  IMPORT_UPDATE___name___SUCCESS: "[__name__] IMPORT_UPDATE___name___SUCCESS",
}

//#region SEARCH___model__
export class Search__name__Action implements Action {
  readonly type = STORE_ACTION.SEARCH___name__
  constructor(public payload: __model__SearchReq) {}
}
export class Search__name__ActionSuccess implements Action {
  readonly type = STORE_ACTION.SEARCH___name___SUCCESS
  constructor(public payload: PagingResponse<__model__SearchRes>) {}
}
export class Search__name__ActionError implements Action {
  readonly type = STORE_ACTION.SEARCH___name___ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion SEARCH___model__

//#region READ_BY_ID
export class ReadByID__name__Action implements Action {
  readonly type = STORE_ACTION.READ_BY_ID___name__
  constructor(public payload: number) {}
}
export class ReadByID__name__ActionSuccess implements Action {
  readonly type = STORE_ACTION.READ_BY_ID___name___SUCCESS
  constructor(public payload: __model__Res) {}
}
export class ReadByID__name__ActionError implements Action {
  readonly type = STORE_ACTION.READ_BY_ID___name___ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion READ_BY_ID

//#region UPDATE
export class Update__name__Action implements Action {
  readonly type = STORE_ACTION.UPDATE___name__
  constructor(public payload: __model__UpdateReq) {}
}
export class Update__name__ActionSuccess implements Action {
  readonly type = STORE_ACTION.UPDATE___name___SUCCESS
  constructor(public payload: Boolean) {}
}
export class Update__name__ActionError implements Action {
  readonly type = STORE_ACTION.UPDATE___name___ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion UPDATE

//#region EXPORT_EXCEL_TEMPLATE
export class ExportExcelTemplate__name__Action implements Action {
  readonly type = STORE_ACTION.EXPORT_EXCEL_TEMPLATE___name__
  constructor() {}
}
export class ExportExcelTemplate__name__ActionSuccess implements Action {
  readonly type = STORE_ACTION.EXPORT_EXCEL_TEMPLATE___name___SUCCESS
  constructor(public payload: string) {}
}
export class ExportExcelTemplate__name__ActionError implements Action {
  readonly type = STORE_ACTION.EXPORT_EXCEL_TEMPLATE___name___ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion EXPORT_EXCEL_TEMPLATE

//#region IMPORT_UPDATE___model__
export class ImportUpdate__name__Action implements Action {
  readonly type = STORE_ACTION.IMPORT_UPDATE___name__
  constructor(public payload: ImportExcelReq) {}
}
export class ImportUpdate__name__ActionSuccess implements Action {
  readonly type = STORE_ACTION.IMPORT_UPDATE___name___SUCCESS
  constructor(public payload: boolean) {}
}
export class ImportUpdate__name__ActionError implements Action {
  readonly type = STORE_ACTION.IMPORT_UPDATE___name___ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion IMPORT_UPDATE___model__

export type Actions =
  | Search__name__Action
  | Search__name__ActionSuccess
  | Search__name__ActionError
  | ReadByID__name__Action
  | ReadByID__name__ActionSuccess
  | ReadByID__name__ActionError
  | Update__name__Action
  | Update__name__ActionSuccess
  | Update__name__ActionError
  | ExportExcelTemplate__name__Action
  | ExportExcelTemplate__name__ActionSuccess
  | ExportExcelTemplate__name__ActionError
  | ImportUpdate__name__Action
  | ImportUpdate__name__ActionSuccess
  | ImportUpdate__name__ActionError
