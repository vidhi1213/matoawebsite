import React from 'react'
const initialdata = {
    dataSource: []
}
const adminreducer = (state = initialdata, action) => {
    switch (action.type) {
        case 'ADD':
            const { wname, wprice, actprice, available, detail, warranty } = action.payload;
            return {
                ...state,
                dataSource: [
                    ...state.dataSource,
                    {
                        key: state.dataSource.length ? +(state.dataSource[state.dataSource.length - 1].key) + 1 : 1,
                        wname: wname,
                        wprice: wprice,
                        actprice: actprice,
                        available: available,
                        detail: detail,
                        warranty: warranty
                    }
                ]
            }
        case 'EDIT':
            // const {pname,des,price,discount}=action.payload;
            // console.log(action.payload.key);
            // console.log(action.payload);
            const newlist = state.dataSource.map((item) => { return item.key === action.payload.key ? action.payload : item })
            console.log(newlist);
            return {
                ...state,
                dataSource: newlist
            }
        case 'DELETE':
            const { key } = action.payload;
            const newData = state.dataSource.filter(item => item.key !== key)
            console.log(newData);
            return {
                ...state,
                dataSource: newData
            }
        default:
            return state
    }
}
export default adminreducer
