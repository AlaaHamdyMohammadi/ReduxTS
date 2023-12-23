interface RepositoriesState{
    loading: boolean;
    error: string | null;
    data: string[];
}

const reducer = (state: RepositoriesState, action: any) => {
    switch(action.type){
        case 'search_repositories': //Guest seach button every thing is empty
            return {loading: true, error: null, data: []};
            case 'search_repositories_success':
            return {loading: false, error: null, data: action.payload};
            case 'search_repositories_error':
            return {loading: false, error: action.payload, data: []};

        default:
            return state;
    }
}

export default reducer;