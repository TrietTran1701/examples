import {SomethingNewResponseModel} from './something-new-response.model';

/**
 * (noCase)       = __name__(noCase)
 * (camelCase)    = __name__(camelCase)
 * (constantCase) = __name__(constantCase)
 * (dotCase)      = __name__(dotCase)
 * (kebabCase)    = __name__(kebabCase)
 * (lowerCase)    = __name__(lowerCase)
 * (pascalCase)   = __name__(pascalCase)
 * (pathCase)     = __name__(pathCase)
 * (sentenceCase) = __name__(sentenceCase)
 * (snakeCase)    = __name__(snakeCase)
 * (titleCase)    = __name__(titleCase)
 */
export interface I__name__ReducerState {
    readonly isLoadingSomethingNew: boolean;
    readonly somethingNew: SomethingNewResponseModel;
}
