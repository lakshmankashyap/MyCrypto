import { SetCurrentWindowStartAction } from '../actionTypes/windowStart';
import { TypeKeys } from '../';

type TSetCurrentWindowStart = typeof setCurrentWindowStart;
const setCurrentWindowStart = (
  payload: SetCurrentWindowStartAction['payload']
): SetCurrentWindowStartAction => ({
  type: TypeKeys.CURRENT_WINDOW_START_SET,
  payload
});

export { setCurrentWindowStart, TSetCurrentWindowStart };
