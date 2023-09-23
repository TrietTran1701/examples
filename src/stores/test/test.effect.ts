import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {map, switchMap} from 'rxjs/operators';
import {IAction} from '../i-action';
import {TestAction} from './test.action';
import {ErrorsAction} from '../errors/errors.action';
import {TestService} from './test.service';
import {TestResponseModel} from './models/test-response.model';

@Injectable()
export class TestEffect {
    constructor(private _statusService: TestService, private _actions$: Actions) {}

    @Effect()
    public getTest(): Observable<IAction<TestResponseModel | HttpErrorResponse>> {
        return this._actions$.pipe(
            ofType(TestAction.LOAD_TEST),
            switchMap((action: IAction<void>) => {
                return this._statusService.getTest().pipe(
                    map((responseModel: TestResponseModel | HttpErrorResponse) => {
                        if (responseModel instanceof HttpErrorResponse) {
                            return ErrorsAction.requestFailure(responseModel);
                        }

                        return TestAction.loadTestSuccess(responseModel);
                    }),
                );
            }),
        );
    }

}
