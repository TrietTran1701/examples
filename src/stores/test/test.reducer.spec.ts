// import {Chance} from 'chance';
import {ITestReducerState} from './models/i-test-reducer-state';
import {TestReducer} from './test.reducer';
import {IAction} from '../i-action';
import {TestAction} from './test.action';
import {TestResponseModel} from './models/test-response.model';

describe('TestReducer', () => {
    // const chance: Chance.Chance = new Chance();
    let initialState: ITestReducerState = null;


    beforeEach(() => {
        initialState = TestReducer['initialState'];
    });

    afterEach(() => {
        initialState = null;
    });

    describe('non reducer action', () => {
        it('should return the initial state', () => {
            const action: IAction<void> = {type: 'none'};

            const actualResult: ITestReducerState = TestReducer.reducer(undefined, action);
            const expectedResult: ITestReducerState = initialState;

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('loadTest action', () => {
        it('should LOAD_TEST', () => {
            const action: IAction<void> = TestAction.loadTest();

            const actualResult: ITestReducerState = TestReducer.reducer(initialState, action);
            const expectedResult: ITestReducerState = {
                ...initialState,
                isLoadingTest: true,
            };

            expect(action.type).toEqual(TestAction.LOAD_TEST);
            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('loadTestSuccess action', () => {
        const model: TestResponseModel = new TestResponseModel({});

        it('should LOAD_TEST_SUCCESS', () => {
            const action: IAction<TestResponseModel> = TestAction.loadTestSuccess(
                model
            );

            const actualResult: ITestReducerState = TestReducer.reducer(initialState, action);
            const expectedResult: ITestReducerState = {
                ...initialState,
                isLoadingTest: false,
                test: model,
            };

            expect(action.type).toEqual(TestAction.LOAD_TEST_SUCCESS);
            expect(actualResult).toEqual(expectedResult);
        });
    });
});
