// import {Chance} from 'chance';
import {I__name__ReducerState} from './models/i-__name__(kebabCase)-reducer-state';
import {__name__Reducer} from './__name__(kebabCase).reducer';
import {IAction} from '../i-action';
import {__name__Action} from './__name__(kebabCase).action';
import {SomethingNewResponseModel} from './models/something-new-response.model';

describe('__name__Reducer', () => {
    // const chance: Chance.Chance = new Chance();
    let initialState: I__name__ReducerState = null;


    beforeEach(() => {
        initialState = __name__Reducer['initialState'];
    });

    afterEach(() => {
        initialState = null;
    });

    describe('non reducer action', () => {
        it('should return the initial state', () => {
            const action: IAction<void> = {type: 'none'};

            const actualResult: I__name__ReducerState = __name__Reducer.reducer(undefined, action);
            const expectedResult: I__name__ReducerState = initialState;

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('loadSomethingNew action', () => {
        it('should LOAD_SOMETHING_NEW', () => {
            const action: IAction<void> = __name__Action.loadSomethingNew();

            const actualResult: I__name__ReducerState = __name__Reducer.reducer(initialState, action);
            const expectedResult: I__name__ReducerState = {
                ...initialState,
                isLoadingSomethingNew: true,
            };

            expect(action.type).toEqual(__name__Action.LOAD_SOMETHING_NEW);
            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('loadSomethingNewSuccess action', () => {
        const model: SomethingNewResponseModel = new SomethingNewResponseModel({});

        it('should LOAD_SOMETHING_NEW_SUCCESS', () => {
            const action: IAction<SomethingNewResponseModel> = __name__Action.loadSomethingNewSuccess(
                model
            );

            const actualResult: I__name__ReducerState = __name__Reducer.reducer(initialState, action);
            const expectedResult: I__name__ReducerState = {
                ...initialState,
                isLoadingSomethingNew: false,
                somethingNew: model,
            };

            expect(action.type).toEqual(__name__Action.LOAD_SOMETHING_NEW_SUCCESS);
            expect(actualResult).toEqual(expectedResult);
        });
    });
});
