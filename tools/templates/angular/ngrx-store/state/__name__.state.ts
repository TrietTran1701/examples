import { IAppState } from "../../app.state"
import { IBaseState } from "../../base.state"

export interface I__name__State extends IBaseState {}

export const initial__name__State: I__name__State = {
  data: [],
  selected: null,
  action: null,
  done: false,
  error: null,
}

export const get__name__State = (state: IAppState) => state.__state__
