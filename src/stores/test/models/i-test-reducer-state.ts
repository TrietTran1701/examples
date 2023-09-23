import {TestResponseModel} from './test-response.model';

/**
 * (noCase)       = test
 * (camelCase)    = test
 * (constantCase) = TEST
 * (dotCase)      = test
 * (kebabCase)    = test
 * (lowerCase)    = test
 * (pascalCase)   = Test
 * (pathCase)     = test
 * (sentenceCase) = Test
 * (snakeCase)    = test
 * (titleCase)    = Test
 */
export interface ITestReducerState {
    readonly isLoadingTest: boolean;
    readonly test: TestResponseModel;
}
