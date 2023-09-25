import { createSelector } from "@ngrx/store"
import { STORE_ACTION } from "./__name__(kebabCase).action"
import { I__name__State, get__name__State } from "./__name__(kebabCase).state"

// #region SEARCH___action__
export const search__name__Success = createSelector(
  get__name__State,
  (state: I__name__State) => {
    if (
      state.action === STORE_ACTION.SEARCH___action__ &&
      state.done &&
      !state.error
    ) {
      return state.data
    } else {
      return null
    }
  }
)

export const search__name__Error = createSelector(
  get__name__State,
  (state: I__name__State) => {
    return state.action === STORE_ACTION.SEARCH___action__ ? state.error : null
  }
)
// #endregion SEARCH___action__

// #region READ_BY_ID___action__
export const readByID__name__Success = createSelector(
  get__name__State,
  (state: I__name__State) => {
    if (
      state.action === STORE_ACTION.READ_BY_ID___action__ &&
      state.done &&
      !state.error
    ) {
      return state.data
    } else {
      return null
    }
  }
)
export const readByID__name__Error = createSelector(
  get__name__State,
  (state: I__name__State) => {
    return state.action === STORE_ACTION.READ_BY_ID___action__
      ? state.error
      : null
  }
)
// #endregion READ_BY_ID___action__

// #region CREATE___action__
export const create__name__Success = createSelector(
  get__name__State,
  (state: I__name__State) => {
    if (
      state.action === STORE_ACTION.CREATE___action__ &&
      state.done &&
      !state.error
    ) {
      return state.data
    } else {
      return null
    }
  }
)
export const create__name__Error = createSelector(
  get__name__State,
  (state: I__name__State) => {
    return state.action === STORE_ACTION.CREATE___action__ ? state.error : null
  }
)
// #endregion CREATE___action__

// #region UPDATE___action__
export const update__name__Success = createSelector(
  get__name__State,
  (state: I__name__State) => {
    if (
      state.action === STORE_ACTION.UPDATE___action__ &&
      state.done &&
      !state.error
    ) {
      return state.data
    } else {
      return null
    }
  }
)
export const update__name__Error = createSelector(
  get__name__State,
  (state: I__name__State) => {
    return state.action === STORE_ACTION.UPDATE___action__ ? state.error : null
  }
)
// #endregion UPDATE___action__

// #region EXPORT_EXCEL_TEMPLATE___action__
export const exportExcelTemplate__name__Success = createSelector(
  get__name__State,
  (state: I__name__State) => {
    if (
      state.action === STORE_ACTION.EXPORT_EXCEL_TEMPLATE___action__ &&
      state.done &&
      !state.error
    ) {
      return state.data
    } else {
      return null
    }
  }
)
export const exportExcelTemplate__name__Error = createSelector(
  get__name__State,
  (state: I__name__State) => {
    return state.action === STORE_ACTION.EXPORT_EXCEL_TEMPLATE___action__
      ? state.error
      : null
  }
)
// #endregion EXPORT_EXCEL_TEMPLATE___action__
