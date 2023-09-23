import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {PropertyNormalizerUtility} from '../../utilities/property-normalizer.utility';
import {TestResponseModel} from './models/test-response.model';

@Injectable()
export class TestService {
    constructor(private _http: HttpClient) {}

    public getTest(): Observable<TestResponseModel | HttpErrorResponse> {
        const endpointUrl: string = 'todo/replace/with/api';

        return this._http.get(endpointUrl).pipe(
            map((response: object) => PropertyNormalizerUtility.normalize(response)),
            map((response: object) => new TestResponseModel(response)),
            catchError((errorResponse: HttpErrorResponse): Observable<HttpErrorResponse> => of(errorResponse)),
        );
    }

}
