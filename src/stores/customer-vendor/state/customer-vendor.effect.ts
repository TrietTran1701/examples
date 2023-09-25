import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, switchMap } from "rxjs/operators"
import { ImportExcelReq } from "src/app/core/models/import-excel.req"
import * as myActions from "./customer-vendor.action"
import { CustomerVendorService } from "../customer-vendor.service"
import { CustomerVendorSearchReq } from "../models/request/customer-vendor-search.req"
import { CustomerVendorRes } from "../models/response/customer-vendor.res"
import { CustomerVendorUpdateReq } from "../models/request/customer-vendor-update.req"
import { CustomerVendorCreateReq } from "../models/request/customer-vendor-create.req"

@Injectable()
export class CustomerVendorEffect {
  constructor(private actions$: Actions, private _service: CustomerVendorService) {}

  // #region SEARCH_CUSTOMER_VENDOR
  searchCustomerVendor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(myActions.STORE_ACTION.SEARCH_CUSTOMER_VENDOR), // Update to your renamed action
      map((action: myActions.SearchCustomerVendorAction) => action.payload),
      switchMap((data: CustomerVendorSearchReq) =>
        this._service.search(data).pipe(
          map((response) => {
            return new myActions.SearchCustomerVendorActionSuccess(response) // Update to your renamed action
          }),
          catchError((err) => {
            return [new myActions.SearchCustomerVendorActionError(err)] // Update to your renamed action
          })
        )
      )
    )
  )
  // #endregion SEARCH_CUSTOMER_VENDOR

  // #region READ_BY_ID_CUSTOMER_VENDOR
  readByIDCustomerVendor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(myActions.STORE_ACTION.READ_BY_ID_CUSTOMER_VENDOR), // Update to your renamed action
      map((action: myActions.ReadByIDCustomerVendorAction) => action.payload), // Assuming payload is the asset type ID
      switchMap((id: number) =>
        this._service.readByID(id).pipe(
          map((response: CustomerVendorRes) => {
            return new myActions.ReadByIDCustomerVendorActionSuccess(response) // Update to your renamed action
          }),
          catchError((err) => {
            return [new myActions.ReadByIDCustomerVendorActionError(err)] // Update to your renamed action
          })
        )
      )
    )
  )
  // #endregion READ_BY_ID_CUSTOMER_VENDOR

  // #region UPDATE_CUSTOMER_VENDOR
  createCustomerVendor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(myActions.STORE_ACTION.CREATE_CUSTOMER_VENDOR), // Update to your renamed action
      map((action: myActions.CreateCustomerVendorAction) => action.payload), // Assuming payload is the asset type ID
      switchMap((req: CustomerVendorCreateReq) =>
        this._service.create(req).pipe(
          map((response: boolean) => {
            return new myActions.CreateCustomerVendorActionSuccess(response) // Update to your renamed action
          }),
          catchError((err) => {
            return [new myActions.CreateCustomerVendorActionError(err)] // Update to your renamed action
          })
        )
      )
    )
  )
  // #endregion UPDATE_CUSTOMER_VENDOR

  // #region UPDATE_CUSTOMER_VENDOR
  updateCustomerVendor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(myActions.STORE_ACTION.UPDATE_CUSTOMER_VENDOR), // Update to your renamed action
      map((action: myActions.UpdateCustomerVendorAction) => action.payload), // Assuming payload is the asset type ID
      switchMap((req: CustomerVendorUpdateReq) =>
        this._service.update(req).pipe(
          map((response: boolean) => {
            return new myActions.UpdateCustomerVendorActionSuccess(response) // Update to your renamed action
          }),
          catchError((err) => {
            return [new myActions.UpdateCustomerVendorActionError(err)] // Update to your renamed action
          })
        )
      )
    )
  )
  // #endregion UPDATE_CUSTOMER_VENDOR

  // #region EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR
  exportExcelTemplateCustomerVendor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(myActions.STORE_ACTION.EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR), // Update to your renamed action
      //map((action: myActions.ExportExcelTemplateCustomerMasterAction) => action.payload), // Assuming payload is the asset type ID
      switchMap(() =>
        this._service.exportExcelTemplate().pipe(
          map((response: string) => {
            return new myActions.ExportExcelTemplateCustomerVendorActionSuccess(
              response
            ) // Update to your renamed action
          }),
          catchError((err) => {
            return [new myActions.ExportExcelTemplateCustomerVendorActionError(err)] // Update to your renamed action
          })
        )
      )
    )
  )
  // #endregion EXPORT_EXCEL_TEMPLATE_CUSTOMER_VENDOR
}
