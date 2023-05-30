export const onLogin = (data) => {
    return {
        type: "APPEND",
        payload: {
            key: data.id,
            uname: data.uname,
            pw: data.pw,
        }
    }
}
export const updateData = (data) => {
    return {
        type: "UPDATE",
        payload: {
            key: data.id,
            uname: data.uname,
            pw: data.pw,
            address: data.address,
            fname: data.fname,
            PhNo: data.PhNo,
            country: data.country,
            state: data.state,
            city: data.city,
            zipCode: data.zipCode,
            courier: data.courier,
            adduname: data.adduname
        }
    }
}
export const addData = (data) => {
    return {
        type: "ADD",
        payload: {
            key: data.key,
            wname: data.wname,
            wprice: data.wprice,
            actprice: data.actprice,
            available: data.available,
            detail: data.detail,
            warranty: data.warranty
        }
    }
}

export const editData = (data) => {
    return {
        type: "EDIT",
        payload: {
            key: data.key,
            wname: data.wname,
            wprice: data.wprice,
            actprice: data.actprice,
            available: data.available,
            detail: data.detail,
            warranty: data.warranty
        }
    }
}

export const deleteData = (key) => {
    return {
        type: 'DELETE',
        payload: {
            key: key
        }
    }
}