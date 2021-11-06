const INIT_STATE = {
    currentRoute: '/',
    pageLoading: true,
}

const AppReducer = (state = INIT_STATE, { type, payload }) => {
    switch (type) {
        case 'ROUTE_CHANGE':
            return {
                ...state,
                currentRoute: payload.route,
                pageLoading: true
            }
        case 'LOADING_START': {
            return {
                ...state,
                pageLoading: true
            }
        }
        case 'LOADING_COMPLETE':
            return {
                ...state,
                pageLoading: false
            }
        default:
            return state
    }
}

export default AppReducer