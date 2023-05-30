import React from 'react'
const initialdata = {
    dataSource: []
}
const reducer = (state = initialdata, action) => {
    switch (action.type) {
        case 'APPEND':
            const { uname, pw, key } = action.payload;
            return {
                ...state,
                dataSource: [
                    ...state.dataSource,
                    {
                        uname: uname,
                        pw: pw,
                        key: key,
                    }
                ]
            }
        case 'UPDATE':
            const updatelist = state.dataSource.map((index) => { return index.key === action.payload.key ? action.payload : index });
            console.log(updatelist);
            return {
                ...state,
                dataSource: updatelist
            }
        default:
            return state
    }
}
export default reducer
