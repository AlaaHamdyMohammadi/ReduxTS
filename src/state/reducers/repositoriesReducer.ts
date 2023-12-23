import { ActionType } from "../actionTypes";
import { Action } from "../actions";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}


const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  //Must determine the return of reducerFunc to prevent any weird data, so just the types of data into the interface

  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES: //Guest seach button every thing is empty
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
