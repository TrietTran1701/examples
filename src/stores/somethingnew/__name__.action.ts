import {IAction} from '../i-action';
import {SomethingNewResponseModel} from './models/something-new-response.model';

export type __name__ActionUnion = void | SomethingNewResponseModel;

export class __name__Action {

    public static readonly LOAD_SOMETHING_NEW: string = '__name__Action.LOAD_SOMETHING_NEW';
    public static readonly LOAD_SOMETHING_NEW_SUCCESS: string = '__name__Action.LOAD_SOMETHING_NEW_SUCCESS';

    public static loadSomethingNew(): IAction<void> {
        return {
            type: __name__Action.LOAD_SOMETHING_NEW,
        };
    }

    public static loadSomethingNewSuccess(model: SomethingNewResponseModel): IAction<SomethingNewResponseModel> {
        return {
            type: __name__Action.LOAD_SOMETHING_NEW_SUCCESS,
            payload: model,
        };
    }

}
