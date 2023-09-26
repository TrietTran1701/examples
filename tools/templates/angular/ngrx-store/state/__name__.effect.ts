import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, switchMap } from "rxjs/operators"
import { ImportExcelReq } from "src/app/core/models/import-excel.req"
import * as myActions from "./__name__(kebabCase).action"
import { __name__Service } from "../__name__(kebabCase).service"
import { __model__SearchReq } from "../models/request/__model__(kebabCase)-search.req"
import { __model__Res } from "../models/response/__model__(kebabCase).res"
import { __model__UpdateReq } from "../models/request/__model__(kebabCase)-update.req"
import { __model__CreateReq } from "../models/request/__model__(kebabCase)-create.req"

@Injectable()
export class __name__Effect {
  constructor(private actions$: Actions, private _service: __name__Service) {}

  // #region GET_ALL___action__
  getAll__name__$ = createEffect(() =>
    this.actions$.pipe(
      ofType(myActions.STORE_ACTION.GET_ALL___action__), // Update to your renamed action
      //map((action: myActions.GetAllSubsidiary) => action.payload),
      switchMap(() =>
        this._service.getAll().pipe(
          map((response) => {
            return new myActions.GetAll__name__ActionSuccess(response) // Update to your renamed action
          }),
          catchError((err) => {
            return [new myActions.GetAll__name__ActionError(err)] // Update to your renamed action
          })
        )
      )
    )
  )
  // #endregion GET_ALL___action__

  // #region SEARCH___action__
  search__name__$ = createEffect(() =>
    this.actions$.pipe(
      ofType(myActions.STORE_ACTION.SEARCH___action__), // Update to your renamed action
      map((action: myActions.Search__name__Action) => action.payload),
      switchMap((data: __model__SearchReq) =>
        this._service.search(data).pipe(
          map((response) => {
            return new myActions.Search__name__ActionSuccess(response) // Update to your renamed action
          }),
          catchError((err) => {
            return [new myActions.Search__name__ActionError(err)] // Update to your renamed action
          })
        )
      )
    )
  )
  // #endregion SEARCH___action__

  // #region READ_BY_ID___action__
  readByID__name__$ = createEffect(() =>
    this.actions$.pipe(
      ofType(myActions.STORE_ACTION.READ_BY_ID___action__), // Update to your renamed action
      map((action: myActions.ReadByID__name__Action) => action.payload), // Assuming payload is the asset type ID
      switchMap((id: number) =>
        this._service.readByID(id).pipe(
          map((response: __model__Res) => {
            return new myActions.ReadByID__name__ActionSuccess(response) // Update to your renamed action
          }),
          catchError((err) => {
            return [new myActions.ReadByID__name__ActionError(err)] // Update to your renamed action
          })
        )
      )
    )
  )
  // #endregion READ_BY_ID___action__

  // #region UPDATE___action__
  create__name__$ = createEffect(() =>
    this.actions$.pipe(
      ofType(myActions.STORE_ACTION.CREATE___action__), // Update to your renamed action
      map((action: myActions.Create__name__Action) => action.payload), // Assuming payload is the asset type ID
      switchMap((req: __model__CreateReq) =>
        this._service.create(req).pipe(
          map((response: boolean) => {
            return new myActions.Create__name__ActionSuccess(response) // Update to your renamed action
          }),
          catchError((err) => {
            return [new myActions.Create__name__ActionError(err)] // Update to your renamed action
          })
        )
      )
    )
  )
  // #endregion UPDATE___action__

  // #region UPDATE___action__
  update__name__$ = createEffect(() =>
    this.actions$.pipe(
      ofType(myActions.STORE_ACTION.UPDATE___action__), // Update to your renamed action
      map((action: myActions.Update__name__Action) => action.payload), // Assuming payload is the asset type ID
      switchMap((req: __model__UpdateReq) =>
        this._service.update(req).pipe(
          map((response: boolean) => {
            return new myActions.Update__name__ActionSuccess(response) // Update to your renamed action
          }),
          catchError((err) => {
            return [new myActions.Update__name__ActionError(err)] // Update to your renamed action
          })
        )
      )
    )
  )
  // #endregion UPDATE___action__

  // #region EXPORT_EXCEL_TEMPLATE___action__
  exportExcelTemplate__name__$ = createEffect(() =>
    this.actions$.pipe(
      ofType(myActions.STORE_ACTION.EXPORT_EXCEL_TEMPLATE___action__), // Update to your renamed action
      //map((action: myActions.ExportExcelTemplateCustomerMasterAction) => action.payload), // Assuming payload is the asset type ID
      switchMap(() =>
        this._service.exportExcelTemplate().pipe(
          map((response: string) => {
            return new myActions.ExportExcelTemplate__name__ActionSuccess(
              response
            ) // Update to your renamed action
          }),
          catchError((err) => {
            return [new myActions.ExportExcelTemplate__name__ActionError(err)] // Update to your renamed action
          })
        )
      )
    )
  )
  // #endregion EXPORT_EXCEL_TEMPLATE___action__
}
