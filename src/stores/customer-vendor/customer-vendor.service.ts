import { Injectable } from "@angular/core"
import { ApiHelper } from "../../helpers/api.helper"
import { URL_CONSTANTS } from "../../config/url.constants"
import { Observable } from "rxjs"
import { PagingResponse } from "src/app/core/models/paging.res"
import { ImportExcelReq } from "src/app/core/models/import-excel.req"

import { CustomerVendorSearchReq } from "./models/request/customer-vendor-search.req"
import { CustomerVendorRes } from "./models/response/customer-vendor.res"
import { CustomerVendorUpdateReq } from "./models/request/customer-vendor-update.req"
import { CustomerVendorCreateReq } from "./models/request/customer-vendor-create.req"

@Injectable()
export class CustomerVendorService {
  constructor(private apiHelper: ApiHelper) {}
  baseUrl = URL_CONSTANTS.customerVender

  public readByID(id: number): Observable<CustomerVendorRes> {
    return this.apiHelper.get<CustomerVendorRes>(`${this.baseUrl}/${id}`)
  }
  public search(
    objReq: CustomerVendorSearchReq
  ): Observable<PagingResponse<CustomerVendorSearchReq>> {
    return this.apiHelper.post<PagingResponse<CustomerVendorSearchReq>>(
      `${this.baseUrl}/search`,
      objReq
    )
  }
  public create(objReq: CustomerVendorCreateReq): Observable<boolean> {
    return this.apiHelper.put<boolean>(`${this.baseUrl}/create`, objReq)
  }
  public update(objReq: CustomerVendorUpdateReq): Observable<boolean> {
    return this.apiHelper.put<boolean>(`${this.baseUrl}/update`, objReq)
  }
  public exportExcelTemplate(): Observable<string> {
    return this.apiHelper.post<string>(`${this.baseUrl}/export-excel-template`)
  }
}
