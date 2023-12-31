import { Action } from "@ngrx/store"
import { ErrorModel } from "src/app/core/models/error.model"
import { ImportExcelReq } from "src/app/core/models/import-excel.req"
import { PagingResponse } from "src/app/core/models/paging.res"
import { __model__SearchReq } from "../models/request/__model__(kebabCase)-search.req"
import { __model__UpdateReq } from "../models/request/__model__(kebabCase)-update.req"
import { __model__CreateReq } from "../models/request/__model__(kebabCase)-create.req"
import { __model__SearchRes } from "../models/response/__model__(kebabCase)-search.res"
import { __model__Res } from "../models/response/__model__(kebabCase).res"

export const STORE_ACTION = {
  CLEAR_ACTION___action__: "[__action__] CLEAR_ACTION___action__",

  GET_ALL___action__: "[__action__] GET_ALL___action__",
  GET_ALL___action___ERROR: "[__action__] GET_ALL___action___ERROR",
  GET_ALL___action___SUCCESS: "[__action__] GET_ALL___action___SUCCESS",

  SEARCH___action__: "[__action__] SEARCH___action__",
  SEARCH___action___ERROR: "[__action__] SEARCH___action___ERROR",
  SEARCH___action___SUCCESS: "[__action__] SEARCH___action___SUCCESS",

  READ_BY_ID___action__: "[__action__] READ_BY_ID___action__",
  READ_BY_ID___action___ERROR: "[__action__] READ_BY_ID___action___ERROR",
  READ_BY_ID___action___SUCCESS: "[__action__] READ_BY_ID___action___SUCCESS",

  CREATE___action__: "[__action__] CREATE___action__",
  CREATE___action___ERROR: "[__action__] CREATE___action___ERROR",
  CREATE___action___SUCCESS: "[__action__] CREATE___action___SUCCESS",

  UPDATE___action__: "[__action__] UPDATE___action__",
  UPDATE___action___ERROR: "[__action__] UPDATE___action___ERROR",
  UPDATE___action___SUCCESS: "[__action__] UPDATE___action___SUCCESS",

  EXPORT_EXCEL_TEMPLATE___action__:
    "[__action__] EXPORT_EXCEL_TEMPLATE___action__",
  EXPORT_EXCEL_TEMPLATE___action___ERROR:
    "[__action__] EXPORT_EXCEL_TEMPLATE___action__ERROR",
  EXPORT_EXCEL_TEMPLATE___action___SUCCESS:
    "[__action__] EXPORT_EXCEL_TEMPLATE___action__SUCCESS",
}

//#region GET_ALL___action__
export class GetAll__name__Action implements Action {
  readonly type = STORE_ACTION.GET_ALL___action__
  constructor() {}
}
export class GetAll__name__ActionSuccess implements Action {
  readonly type = STORE_ACTION.GET_ALL___action___SUCCESS
  constructor(public payload: __model__Res[]) {}
}
export class GetAll__name__ActionError implements Action {
  readonly type = STORE_ACTION.GET_ALL___action___ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion GET_ALL___action__

//#region CLEAR_ACTION___model__
export class ClearAction__name__Action implements Action {
  readonly type = STORE_ACTION.CLEAR_ACTION___action__
  constructor() {}
}
//#endregion CLEAR_ACTION___model__

//#region SEARCH___model__
export class Search__name__Action implements Action {
  readonly type = STORE_ACTION.SEARCH___action__
  constructor(public payload: __model__SearchReq) {}
}
export class Search__name__ActionSuccess implements Action {
  readonly type = STORE_ACTION.SEARCH___action___SUCCESS
  constructor(public payload: PagingResponse<__model__SearchRes>) {}
}
export class Search__name__ActionError implements Action {
  readonly type = STORE_ACTION.SEARCH___action___ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion SEARCH___model__

//#region READ_BY_ID
export class ReadByID__name__Action implements Action {
  readonly type = STORE_ACTION.READ_BY_ID___action__
  constructor(public payload: number) {}
}
export class ReadByID__name__ActionSuccess implements Action {
  readonly type = STORE_ACTION.READ_BY_ID___action___SUCCESS
  constructor(public payload: __model__Res) {}
}
export class ReadByID__name__ActionError implements Action {
  readonly type = STORE_ACTION.READ_BY_ID___action___ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion READ_BY_ID

//#region CREATE
export class Create__name__Action implements Action {
  readonly type = STORE_ACTION.CREATE___action__
  constructor(public payload: __model__CreateReq) {}
}
export class Create__name__ActionSuccess implements Action {
  readonly type = STORE_ACTION.CREATE___action___SUCCESS
  constructor(public payload: Boolean) {}
}
export class Create__name__ActionError implements Action {
  readonly type = STORE_ACTION.CREATE___action___ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion CREATE

//#region UPDATE
export class Update__name__Action implements Action {
  readonly type = STORE_ACTION.UPDATE___action__
  constructor(public payload: __model__UpdateReq) {}
}
export class Update__name__ActionSuccess implements Action {
  readonly type = STORE_ACTION.UPDATE___action___SUCCESS
  constructor(public payload: Boolean) {}
}
export class Update__name__ActionError implements Action {
  readonly type = STORE_ACTION.UPDATE___action___ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion UPDATE

//#region EXPORT_EXCEL_TEMPLATE
export class ExportExcelTemplate__name__Action implements Action {
  readonly type = STORE_ACTION.EXPORT_EXCEL_TEMPLATE___action__
  constructor() {}
}
export class ExportExcelTemplate__name__ActionSuccess implements Action {
  readonly type = STORE_ACTION.EXPORT_EXCEL_TEMPLATE___action___SUCCESS
  constructor(public payload: string) {}
}
export class ExportExcelTemplate__name__ActionError implements Action {
  readonly type = STORE_ACTION.EXPORT_EXCEL_TEMPLATE___action___ERROR
  constructor(public payload: ErrorModel) {}
}
//#endregion EXPORT_EXCEL_TEMPLATE

export type Actions =
  | Search__name__Action
  | Search__name__ActionSuccess
  | Search__name__ActionError
  | ReadByID__name__Action
  | ReadByID__name__ActionSuccess
  | ReadByID__name__ActionError
  | Create__name__Action
  | Create__name__ActionSuccess
  | Create__name__ActionError
  | Update__name__Action
  | Update__name__ActionSuccess
  | Update__name__ActionError
  | ExportExcelTemplate__name__Action
  | ExportExcelTemplate__name__ActionSuccess
  | ExportExcelTemplate__name__ActionError
