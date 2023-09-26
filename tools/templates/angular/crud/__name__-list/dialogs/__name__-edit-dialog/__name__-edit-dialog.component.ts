import { Component, Inject, OnInit } from "@angular/core"
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms"
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog"
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter"
import { Store } from "@ngrx/store"
import { Subject, finalize, takeUntil } from "rxjs"
import { LoaderHelper, NotifyHelper } from "src/app/helpers"
import { IAppState } from "src/app/stored/app.state"
import * as Constants from "src/app/config/constants"

import * as __name__Selector from "src/app/stored//state/.selector"
import * as __name__Action from "src/app/stored//state/.action"

import { __name__UpdateReq } from "src/app/models/request//-update.req"

import { __name__Res } from "src/app/models/response//.res"

import { ErrorModel } from "src/app/core/models/error.model"

@Component({
  selector: "app-customer-master-edit-dialog",
  templateUrl: "./customer-master-edit-dialog.component.html",
  styleUrls: ["./customer-master-edit-dialog.component.css"],
})
export class __name__EditDialogComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  // Variables

  private destroy$ = new Subject<void>()
  __name__EditForm: UntypedFormGroup
  __name__: __name__Res

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: __name__Res,
    public dialogEdit__name__Ref: MatDialogRef<__name__EditDialogComponent>,
    private _fb: UntypedFormBuilder,
    public dialog: MatDialog,
    private _loader: LoaderHelper,
    private _store: Store<IAppState>,
    private _notify: NotifyHelper
  ) {
    super()
    this.selectUpdate__name__()
  }

  ngOnInit(): void {
    this.__name__ = this.data
    this.__name__EditForm = this.create__name__EditForm()
  }

  create__name__EditForm(): UntypedFormGroup {
    return (this.__name__EditForm = this._fb.group({
      companyName: [this.__name__.company_name],
      phone: [this.__name__.phone],
      email: [this.__name__.email],
      vatRegNumber: [this.__name__.vat_reg_number],
      countryCode: [this.__name__.country_code, Validators.required], //Quốc gia
      currency: [this.__name__.currency, Validators.required], // Ngoại tệ

      subsidiaryIDs: [this.__name__.subsidiary_ids, Validators.required], //Pháp nhân
      subsidiaryPrimaryID: [this.__name__.subsidiary_id, Validators.required], //Pháp nhân chính
      representingSubsidiaryID: [this.__name__.representing_subsidiary_id], //Đại diện
      customerPostingGroupID: [
        this.__name__.customer_posting_group_id,
        Validators.required,
      ], //Định khoản
      paymentTermID: [this.__name__.payment_term_id, Validators.required], //Số ngày công nợ
    }))
  }

  onUpdate__name__() {
    if (this.__name__EditForm.invalid) {
      this.__name__EditForm.markAllAsTouched()
      this._notify.openInfo(Constants.MESSAGE.GET_VALIDATE_FORM)
      return
    }
    let dataForm = this.__name__EditForm.getRawValue()
    this._loader.show()
    const __name__UpdateReq: __name__UpdateReq = {
      customer_master_id: this.data.customer_master_id, //Khóa chính
      subsidiary_primary_id: dataForm.subsidiaryPrimaryID,
      representing_subsidiary_id: dataForm.representingSubsidiaryID,
      customer_posting_group_id: dataForm.customerPostingGroupID,
      payment_term_id: dataForm.paymentTermID,
      country_code: dataForm.countryCode,
      currency: dataForm.currency,
      subsidiary_ids: dataForm.subsidiaryIDs,
    }
    this.dispatchUpdate__name__(__name__UpdateReq)
  }

  //#region SELECT Update__name__
  selectUpdate__name__() {
    this.subs.sink = this._store
      .select(__name__Selector.update__name__Error)
      .pipe(takeUntil(this.destroy$))
      .subscribe((error: ErrorModel) => {
        if (error) {
          this._loader.hide()
          this._notify.open(error)
        }
      })

    this.subs.sink = this._store
      .select(__name__Selector.update__name__Success)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          this._loader.hide()
        })
      )
      .subscribe((data: boolean) => {
        if (data) {
          this._loader.hide()
          this._notify.openSuccess(Constants.MESSAGE.UPDATE_SUCCESS)
          this.dialogEdit__name__Ref.close({ dialogResult: true })
        }
      })
  }

  dispatchUpdate__name__(payload: __name__UpdateReq) {
    this._store.dispatch(new __name__Action.Update__name__Action(payload))
  }
  //#endregion SELECT Update__name__
}
