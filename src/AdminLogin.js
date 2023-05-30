import React, { useState } from 'react'
import { Name, Input, Btnlogin, Cancelbtn, Loginbtn, Loginform, Groupbtn, Logindetail, Background, Div } from './Styles.js';
import { useHistory } from 'react-router'

const AdminLogin = () => {
    const history = useHistory();

    const HandleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    const [data, setData] = useState({
        uname: '',
        pw: '',
        id: new Date().getTime().toString(),
        unameErr: '',
        pwErr: '',
        address: ''
    })

    const validate = () => {
        let unameErr = '';
        let pwErr = '';
        if (data.uname === '') {
            unameErr = 'Email must be filled out!!'
        }
        else {
            if (!data.uname.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                unameErr = 'Email address must be valid email.';
            }

        }
        if (data.pw === '') {
            pwErr = 'Password must be filled out!!'
        }
        else {
            if ((data.pw).length < 8) {
                pwErr = 'Password should contain atleast 8 characters!!'
            }
            else {
                if (!data.pw.match(/\d/i)) {
                    pwErr = 'Password should contain atleast 1 number!!'
                }
                else {
                    if (!data.pw.match(/[a-z]/)) {
                        pwErr = 'Password should contain atleast 1 letter!!'
                    }
                    else {
                        if (!data.pw.match(/[A-Z]/)) {
                            pwErr = 'Password should contain atleast 1 UpperCase letter!!'
                        }
                    }
                }
            }
        }
        setData({
            ...data,
            unameErr,
            pwErr
        })
        if (unameErr || pwErr) {
            return false;
        }
        else {
            return true;
        }
    }

    const HandleSubmit = () => {
        if (validate()) {
            history.push('/admin/adminproduct')
        }
    }

    const handleCancel = () => {
        history.goBack()
    }

    return (
        <Div>
            <Background>
                <Logindetail>
                    <Loginform>Login Form</Loginform>
                    <Name>Username</Name>
                    <Input type="text" placeholder="Username" value={data.uname} name='uname' onChange={HandleChange}></Input>
                    <lable style={{ color: "red", fontSize: "14px" }}>{data.unameErr}</lable>
                    <Name>Password</Name>
                    <Input type="text" placeholder="Password" name='pw' value={data.pw} onChange={HandleChange}></Input>
                    <lable style={{ color: "red", fontSize: "14px" }}>{data.pwErr}</lable>
                    <Groupbtn>
                        <Btnlogin type="button" onClick={HandleSubmit}>LOGIN</Btnlogin>
                        <Cancelbtn type="button" onClick={handleCancel}>CANCEL</Cancelbtn>
                    </Groupbtn>
                    {/* {open && <div>{appState.loading ? <div> <i className="fa fa-spinner fa-spin" /> Loading...</div> : <div style={{ color: "red" }}>Login failed!!!</div>}</div>} */}
                </Logindetail>
            </Background>
        </Div >
    )
}

export default AdminLogin
