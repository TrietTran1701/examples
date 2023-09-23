import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';
import {IAction} from '../i-action';
import {__name__Action} from './__name__(kebabCase).action';
import {ErrorsAction} from '../errors/errors.action';
import {__name__Service} from './__name__(kebabCase).service';
import {SomethingNewResponseModel} from './models/something-new-response.model';

@Injectable()
export class __name__Effect {
    constructor(private _statusService: __name__Service, private _actions$: Actions) {}

    @Effect()
    public getSomethingNew(): Observable<IAction<SomethingNewResponseModel | HttpErrorResponse>> {
        return this._actions$.pipe(
            ofType(__name__Action.LOAD_SOMETHING_NEW),
            switchMap((action: IAction<void>) => {
                return this._statusService.getSomethingNew().pipe(
                    map((responseModel: SomethingNewResponseModel | HttpErrorResponse) => {
                        if (responseModel instanceof HttpErrorResponse) {
                            return ErrorsAction.requestFailure(responseModel);
                        }

                        return __name__Action.loadSomethingNewSuccess(responseModel);
                    }),
                );
            }),
        );
    }

}
