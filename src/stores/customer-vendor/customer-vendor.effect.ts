import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';
import {IAction} from '../i-action';
import {CustomerVendorAction} from './customer-vendor.action';
import {ErrorsAction} from '../errors/errors.action';
import {CustomerVendorService} from './customer-vendor.service';
import {CustomerVendorResponseModel} from './models/customer-vendor-response.model';

@Injectable()
export class CustomerVendorEffect {
    constructor(private _statusService: CustomerVendorService, private _actions$: Actions) {}

    @Effect()
    public getCustomerVendor(): Observable<IAction<CustomerVendorResponseModel | HttpErrorResponse>> {
        return this._actions$.pipe(
            ofType(CustomerVendorAction.LOAD_CUSTOMER_VENDOR),
            switchMap((action: IAction<void>) => {
                return this._statusService.getCustomerVendor().pipe(
                    map((responseModel: CustomerVendorResponseModel | HttpErrorResponse) => {
                        if (responseModel instanceof HttpErrorResponse) {
                            return ErrorsAction.requestFailure(responseModel);
                        }

                        return CustomerVendorAction.loadCustomerVendorSuccess(responseModel);
                    }),
                );
            }),
        );
    }

}
