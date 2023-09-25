import { Injectable } from "@angular/core"
import { ApiHelper } from "../../helpers/api.helper"
import { URL_CONSTANTS } from "../../config/url.constants"
import { Observable } from "rxjs"
import { PagingResponse } from "src/app/core/models/paging.res"
import { ImportExcelReq } from "src/app/core/models/import-excel.req"

import { __model__SearchReq } from "./models/request/__model__(kebabCase)-search.req"
import { __model__Res } from "./models/response/__model__(kebabCase).res"
import { __model__UpdateReq } from "./models/request/__model__(kebabCase)-update.req"
import { __model__CreateReq } from "./models/request/__model__(kebabCase)-create.req"

@Injectable()
export class __name__Service {
  constructor(private apiHelper: ApiHelper) {}
  baseUrl = URL_CONSTANTS.__state__

  public readByID(id: number): Observable<__model__Res> {
    return this.apiHelper.get<__model__Res>(`${this.baseUrl}/${id}`)
  }
  public search(
    objReq: __model__SearchReq
  ): Observable<PagingResponse<__model__SearchReq>> {
    return this.apiHelper.post<PagingResponse<__model__SearchReq>>(
      `${this.baseUrl}/search`,
      objReq
    )
  }
  public create(objReq: __model__CreateReq): Observable<boolean> {
    return this.apiHelper.put<boolean>(`${this.baseUrl}/create`, objReq)
  }
  public update(objReq: __model__UpdateReq): Observable<boolean> {
    return this.apiHelper.put<boolean>(`${this.baseUrl}/update`, objReq)
  }
  public exportExcelTemplate(): Observable<string> {
    return this.apiHelper.post<string>(`${this.baseUrl}/export-excel-template`)
  }
}
