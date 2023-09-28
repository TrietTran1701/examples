import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from "@angular/cdk/layout"
import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core"
import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms"
import { MatDialog } from "@angular/material/dialog"
import { Router } from "@angular/router"
import { Store } from "@ngrx/store"
import { Subject, takeUntil, finalize, timeout } from "rxjs"
import { PagingResponse } from "src/app/core/models/paging.res"
import {
  LoaderHelper,
  NotifyHelper,
  convertToISO8601,
  getDate,
} from "src/app/helpers"
import { DataFormatPipe } from "src/app/shared/pipes/data-format.pipe"
import { IAppState } from "src/app/stored/app.state"
import * as Constants from "src/app/config/constants"

import { __name__Res } from "src/app/stored/__name__(kebabCase)/models/response/__name__(kebabCase).res"
import { __name__SearchReq } from "src/app/stored/__name__(kebabCase)/models/request/__name__(kebabCase)-search.req"

import * as __name__Selector from "src/app/stored/__name__(kebabCase)/state/__name__(kebabCase).selector"
import * as __name__Action from "src/app/stored/__name__(kebabCase)/state/__name__(kebabCase).action"

import { __name__SearchRes } from "src/app/stored/__name__(kebabCase)/models/response/__name__(kebabCase).res"
import { __name__EditDialogComponent } from "./dialogs/__name__(kebabCase)-edit-dialog/__name__(kebabCase)-edit-dialog.component"
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter"
import { __name__ImportExcelDialogComponent } from "./dialogs/__name__(kebabCase)-import-excel-dialog/__name__(kebabCase)-import-excel-dialog.component"
import { TableModel } from "src/app/core/models/table.model"
import { ErrorModel } from "src/app/core/models/error.model"

@Component({
  selector: "app-__name__(kebabCase)-list",
  templateUrl: "./__name__(kebabCase)-list.component.html",
  styleUrls: ["./__name__(kebabCase)-list.component.css"],
})
export class __name__ListComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit, OnDestroy
{
  // Variables
  private destroy$ = new Subject<void>()

  breadscrums = [
    {
      items: [
        { text: "Example parent path", navigate: "/" },
        { text: "Example child path" },
      ],
    },
  ]

  @ViewChild("templateAction", { static: true })
  templateAction: TemplateRef<any>

  isDesktop: boolean = false
  isTablet: boolean = false
  isMobile: boolean = false

  tbl__name__: TableModel<__name__SearchRes>
  __name__: __name__Res

  public __name__DetailForm: UntypedFormGroup

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _fb: UntypedFormBuilder,
    private _loader: LoaderHelper,
    private _store: Store<IAppState>,
    private _notify: NotifyHelper,
    private _router: Router,
    private dialog: MatDialog,
    private _dataFormatPipe: DataFormatPipe
  ) {
    super()
    this.__name__DetailForm = this.init__name__DetailForm()
    this.selectSearch__name__()
    this.selectReadByID__name__()
    this.init__name__Table()
    this.onSearch__name__()
  }

  ngOnInit(): void {
    this._breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((bs: BreakpointState) => {
        if (bs.matches) {
          this.isMobile = true
        } else {
          this.isDesktop = true
        }
      })
    this.init__name__Table()
  }

  init__name__Table() {
    let columns = [
      {
        name: "Column 1",
        prop: "internal_id",
        widthCol: 100,
        maxWidthCol: 100,
      },
      {
        name: "Column 2",
        prop: "company_name",
        widthCol: 300,
      },
      {
        name: "Action column",
        widthCol: 100,
        maxWidthCol: 100,
        cellTemplate: this.templateAction,
        headerClass: "cell-text-right",
        class: "cell-text-right",
      },
    ]
    this.tbl__name__ = new TableModel<__name__SearchRes>()
    this.tbl__name__.columns = columns
    this.tbl__name__.pagingConfig.PageSize = 20
    this.tbl__name__.dataSource = []
  }

  public init__name__DetailForm(): UntypedFormGroup {
    let dateFrom = new Date()
    let dateTo = new Date()
    dateFrom.setDate(dateFrom.getDate() - 7)
    return this._fb.group({
      keysearch: [null],
      dateFrom: [dateFrom],
      dateTo: [dateTo],
    })
  }

  onOpenDialogEdit__name__(data: __name__SearchRes) {
    this.dispatchReadByID__name__(data.customer_master_id)
  }

  onSearch__name__(page_index: number = 0) {
    let dataForm = this.__name__DetailForm.getRawValue()
    if (dataForm.dateFrom == null || dataForm.dateTo == null) {
      this._notify.openInfo(Constants.MESSAGE.GET_VALIDATE_DATETIME)
      return
    }
    this._loader.show()

    const __name__SearchReq: __name__SearchReq = {
      keysearch: dataForm.keysearch?.trim(),
      date_from: convertToISO8601(getDate(dataForm.dateFrom)),
      date_to: convertToISO8601(getDate(dataForm.dateTo)),
      page_size: this.tbl__name__?.pagingConfig?.PageSize,
      page_index: page_index,
    }

    this.dispatchSearch__name__(__name__SearchReq)
  }

  onPageClicked(objPaging) {
    this.onSearch__name__(objPaging.PageIndex)
  }

  onChangeDateFrom(value) {
    let dateFrom = value
    let ctrDateTo = this.__name__DetailForm.get("dateTo")
    let dateTo = ctrDateTo.value
    if (dateFrom > dateTo) {
      const newDate = new Date(dateFrom)
      newDate.setHours(23, 59, 59, 59)
      ctrDateTo.setValue(newDate)
    }
  }

  onChangeDateTo(value) {
    let dateTo = value
    let ctrDateFrom = this.__name__DetailForm.get("dateFrom")
    let dateFrom = ctrDateFrom.value
    if (dateTo < dateFrom) {
      const newDate = new Date(dateTo)
      newDate.setHours(0, 0, 0, 0)
      ctrDateFrom.setValue(newDate)
    }
  }

  async onShowImportExcel__name__Dialog() {
    const dialogRef = this.dialog.open(__name__ImportExcelDialogComponent, {
      position: { top: "50px" },
      width: "1600px",
      disableClose: true,
    })
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result && result.is_success) {
        if (this.tbl__name__.dataSource.length > 0) {
          this.onSearch__name__()
        }
      }
      //this._store.dispatch(new evoucherActions.ClearStateAction());
    })
  }

  //#region SELECT ReadByID__name__
  selectReadByID__name__() {
    this.subs.sink = this._store
      .select(__name__Selector.readByID__name__Error)
      .pipe(takeUntil(this.destroy$))
      .subscribe((error) => {
        if (error) {
          this._loader.hide()
        }
      })

    this.subs.sink = this._store
      .select(__name__Selector.readByID__name__Success)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          this._loader.hide()
        })
      )
      .subscribe((data: __name__Res) => {
        if (data) {
          this.__name__ = data
          this.actionAfterSelectReadByID__name__(data)
          this._loader.hide()
        }
      })
  }

  dispatchReadByID__name__(id: number) {
    this._loader.show()
    this._store.dispatch(new __name__Action.ReadByID__name__Action(id))
  }

  actionAfterSelectReadByID__name__(data: __name__Res) {
    const dialogRef = this.dialog.open(__name__EditDialogComponent, {
      position: { top: "50px" },
      disableClose: true,
      data: data,
      width: "1000px",
    })
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.dialogResult) {
        this.onSearch__name__(this.tbl__name__?.pagingConfig?.CurrentPageIndex)
      }
    })
  }
  //#endregion SELECT ReadByID__name__

  //#region SELECT Search__name__
  selectSearch__name__() {
    this.subs.sink = this._store
      .select(__name__Selector.search__name__Error)
      .pipe(takeUntil(this.destroy$))
      .subscribe((error: ErrorModel) => {
        if (error) {
          this._loader.hide()
          this.tbl__name__?.ResetDataEmpty()
          if (error.status !== 204) this._notify.open(error)
        }
      })

    this.subs.sink = this._store
      .select(__name__Selector.search__name__Success)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => {
          this._loader.hide()
        })
      )
      .subscribe((data: PagingResponse<__name__SearchRes>) => {
        if (data) {
          this.tbl__name__?.SetData(data)
          this._loader.hide()
        }
      })
  }

  dispatchSearch__name__(payload: __name__SearchReq) {
    this._store.dispatch(new __name__Action.Search__name__Action(payload))
  }
  //#endregion SELECT Search__name__
}
