import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {PropertyNormalizerUtility} from '../../utilities/property-normalizer.utility';
import {CustomerMasterResponseModel} from './models/customer-master-response.model';

@Injectable()
export class CustomerMasterService {
    constructor(private _http: HttpClient) {}

    public getCustomerMaster(): Observable<CustomerMasterResponseModel | HttpErrorResponse> {
        const endpointUrl: string = 'todo/replace/with/api';

        return this._http.get(endpointUrl).pipe(
            map((response: object) => PropertyNormalizerUtility.normalize(response)),
            map((response: object) => new CustomerMasterResponseModel(response)),
            catchError((errorResponse: HttpErrorResponse): Observable<HttpErrorResponse> => of(errorResponse)),
        );
    }

}
