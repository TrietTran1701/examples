import {ITestReducerState} from './models/i-test-reducer-state';
import {IAction} from '../i-action';
import {TestAction, TestActionUnion} from './test.action';
import {TestResponseModel} from './models/test-response.model';

// Version: __version__(noCase)
// Description: __description__(noCase)

export class TestReducer {
    public static readonly initialState: ITestReducerState = {
        isLoadingTest: false,
        test: null,
    };

    public static reducer(state: ITestReducerState = TestReducer.initialState, action: IAction<TestActionUnion>): ITestReducerState {
        switch (action.type) {
            case TestAction.LOAD_TEST:
                return {
                    ...state,
                    isLoadingTest: true,
                };
            case TestAction.LOAD_TEST_SUCCESS:
                return {
                    ...state,
                    isLoadingTest: false,
                    test: action.payload as TestResponseModel,
                };
            default:
                return state;
        }
    }

}
