const initialState = {
    symbol: "aapl"
};

export const keyPressReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'key_press':
            return {
                ...state,
                symbol: action.symbol
            };
        default:
            return state;
    }
};