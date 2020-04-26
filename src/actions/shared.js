import { getInitialData } from "../utils/api";
import { receiveUsers } from "./user";
import { receivedTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receivedTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
