import {IAction} from '../i-action';
import {TestResponseModel} from './models/test-response.model';

export type TestActionUnion = void | TestResponseModel;

export class TestAction {

    public static readonly LOAD_TEST: string = 'TestAction.LOAD_TEST';
    public static readonly LOAD_TEST_SUCCESS: string = 'TestAction.LOAD_TEST_SUCCESS';

    public static loadTest(): IAction<void> {
        return {
            type: TestAction.LOAD_TEST,
        };
    }

    public static loadTestSuccess(model: TestResponseModel): IAction<TestResponseModel> {
        return {
            type: TestAction.LOAD_TEST_SUCCESS,
            payload: model,
        };
    }

}
