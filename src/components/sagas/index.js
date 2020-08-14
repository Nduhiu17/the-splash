import imagesSaga from "./imagesSaga";
import statsSaga from "./statsSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga(params) {
  yield all([imagesSaga(), statsSaga()]);
}
