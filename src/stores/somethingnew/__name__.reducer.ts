import {I__name__ReducerState} from './models/i-__name__(kebabCase)-reducer-state';
import {IAction} from '../i-action';
import {__name__Action, __name__ActionUnion} from './__name__(kebabCase).action';
import {SomethingNewResponseModel} from './models/something-new-response.model';

// Version: __version__(noCase)
// Description: __description__(noCase)

export class __name__Reducer {
    public static readonly initialState: I__name__ReducerState = {
        isLoadingSomethingNew: false,
        somethingNew: null,
    };

    public static reducer(state: I__name__ReducerState = __name__Reducer.initialState, action: IAction<__name__ActionUnion>): I__name__ReducerState {
        switch (action.type) {
            case __name__Action.LOAD_SOMETHING_NEW:
                return {
                    ...state,
                    isLoadingSomethingNew: true,
                };
            case __name__Action.LOAD_SOMETHING_NEW_SUCCESS:
                return {
                    ...state,
                    isLoadingSomethingNew: false,
                    somethingNew: action.payload as SomethingNewResponseModel,
                };
            default:
                return state;
        }
    }

}
