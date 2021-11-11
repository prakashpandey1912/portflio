const INIT_STATE = {
    currentRoute: '/loader',
    pageLoading: true,
    firstTime: true,
}

const AppReducer = (state = INIT_STATE, { type, payload }) => {
    switch (type) {
        case 'ROUTE_CHANGE':
            return {
                ...state,
                currentRoute: payload.currentRoute,
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
        case 'FIRST': {
            return {
                ...state,
                firstTime: payload.firstTime
            }
        }
        default:
            return state
    }
}

export default AppReducer