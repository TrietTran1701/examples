import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';
import {IAction} from '../i-action';
import {CustomerMasterAction} from './customer-master.action';
import {ErrorsAction} from '../errors/errors.action';
import {CustomerMasterService} from './customer-master.service';
import {CustomerMasterResponseModel} from './models/customer-master-response.model';

@Injectable()
export class CustomerMasterEffect {
    constructor(private _statusService: CustomerMasterService, private _actions$: Actions) {}

    @Effect()
    public getCustomerMaster(): Observable<IAction<CustomerMasterResponseModel | HttpErrorResponse>> {
        return this._actions$.pipe(
            ofType(CustomerMasterAction.LOAD_CUSTOMER_MASTER),
            switchMap((action: IAction<void>) => {
                return this._statusService.getCustomerMaster().pipe(
                    map((responseModel: CustomerMasterResponseModel | HttpErrorResponse) => {
                        if (responseModel instanceof HttpErrorResponse) {
                            return ErrorsAction.requestFailure(responseModel);
                        }

                        return CustomerMasterAction.loadCustomerMasterSuccess(responseModel);
                    }),
                );
            }),
        );
    }

}
