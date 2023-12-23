interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesAction {
  type: "search_repositories";
}
interface SearchRepositoriesSuccessAction {
  type: "search_repositories_success";
  payload: string[];
}
interface SearchRepositoriesErrorAction {
  type: "search_repositories_error";
  payload: string;
}

const reducer = (
  state: RepositoriesState,
  action:
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction
): RepositoriesState => {
  //Must determine the return of reducerFunc to prevent any weird data, so just the types of data into the interface
  
  
  switch (action.type) {
    case "search_repositories": //Guest seach button every thing is empty
      return { loading: true, error: null, data: [] };
    case "search_repositories_success":
      return { loading: false, error: null, data: action.payload };
    case "search_repositories_error":
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
