import { STORE_ACTION } from "./__name__(kebabCase).action"
import { AppAction } from "../../app.action"
import {
  initial__name__State,
  I__name__State,
} from "./__name__(kebabCase).state"

export function reducer(
  state = initial__name__State,
  action: AppAction
): I__name__State {
  switch (action.type) {
    // #region GET_ALL___action__
    case STORE_ACTION.GET_ALL___action__:
      return {
        ...state,
        action: STORE_ACTION.GET_ALL___action__,
        done: true,
        error: null,
        selected: null,
      }
    case STORE_ACTION.GET_ALL___action___SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        error: null,
        selected: null,
      }

    case STORE_ACTION.GET_ALL___action___ERROR:
      return {
        ...state,
        done: true,
        error: action.payload,
        selected: null,
      }
    // #endregion GET_ALL___action__

    // #region CLEAR_ACTION___action__
    case STORE_ACTION.CLEAR_ACTION___action__:
      return {
        ...state,
        action: STORE_ACTION.CLEAR_ACTION___action__,
        done: false,
        error: null,
        selected: null,
      }
    // #endregion CLEAR_ACTION___action__

    // #region SEARCH___action__
    case STORE_ACTION.SEARCH___action__:
      return {
        ...state,
        action: STORE_ACTION.SEARCH___action__,
        done: false,
        error: null,
        selected: null,
      }
    case STORE_ACTION.SEARCH___action___SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        error: null,
        selected: null,
      }

    case STORE_ACTION.SEARCH___action___ERROR:
      return {
        ...state,
        done: true,
        error: action.payload,
        selected: null,
      }
    // #endregion SEARCH___action__

    // #region READ_BY_ID___action__
    case STORE_ACTION.READ_BY_ID___action__:
      return {
        ...state,
        action: STORE_ACTION.READ_BY_ID___action__,
        done: false,
        error: null,
        selected: null,
      }
    case STORE_ACTION.READ_BY_ID___action___SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        error: null,
        selected: null,
      }
    case STORE_ACTION.READ_BY_ID___action___ERROR:
      return {
        ...state,
        done: true,
        error: action.payload,
        selected: null,
      }
    // #region READ_BY_ID___action__

    // #region CREATE___action__
    case STORE_ACTION.CREATE___action__:
      return {
        ...state,
        action: STORE_ACTION.CREATE___action__,
        done: false,
        error: null,
        selected: null,
      }
    case STORE_ACTION.CREATE___action___SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        error: null,
        selected: null,
      }
    case STORE_ACTION.CREATE___action___ERROR:
      return {
        ...state,
        done: true,
        error: action.payload,
        selected: null,
      }
    // #region CREATE___action__

    // #region UPDATE___action__
    case STORE_ACTION.UPDATE___action__:
      return {
        ...state,
        action: STORE_ACTION.UPDATE___action__,
        done: false,
        error: null,
        selected: null,
      }
    case STORE_ACTION.UPDATE___action___SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        error: null,
        selected: null,
      }
    case STORE_ACTION.UPDATE___action___ERROR:
      return {
        ...state,
        done: true,
        error: action.payload,
        selected: null,
      }
    // #region UPDATE___action__

    // #region EXPORT_EXCEL_TEMPLATE___action__
    case STORE_ACTION.EXPORT_EXCEL_TEMPLATE___action__:
      return {
        ...state,
        action: STORE_ACTION.EXPORT_EXCEL_TEMPLATE___action__,
        done: false,
        error: null,
        selected: null,
      }
    case STORE_ACTION.EXPORT_EXCEL_TEMPLATE___action___SUCCESS:
      return {
        ...state,
        data: action.payload,
        done: true,
        error: null,
        selected: null,
      }
    case STORE_ACTION.EXPORT_EXCEL_TEMPLATE___action___ERROR:
      return {
        ...state,
        done: true,
        error: action.payload,
        selected: null,
      }
    // #region EXPORT_EXCEL_TEMPLATE___action__
  }
  return state
}
