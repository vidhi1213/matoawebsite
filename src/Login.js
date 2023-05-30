import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux';
import { onLogin } from './action/action.js'
import { Name, Input, Btnlogin, Cancelbtn, Loginbtn, Loginform, Groupbtn, Logindetail, Background, Div } from './Styles.js';
import { useCookies } from 'react-cookie';
import Header from './Header.js';
import Footer from './Footer'
import axios from 'axios';


const Login = () => {
    const [appState, setAppState] = useState({
        loading: false,
        repos: []
    });
    const [open, setOpen] = useState(false)
    const [cookies, setCookie] = useCookies(['user'])
    const history = useHistory();
    const [data, setData] = useState({
        uname: '',
        pw: '',
        id: new Date().getTime().toString(),
        unameErr: '',
        pwErr: '',
        address: ''
    })

    const list = useSelector((state) => state.reducer.dataSource)
    const dispatch = useDispatch();

    console.log(list);

    const getData = async (pageval) => {
        setAppState(prevState => ({ ...prevState, loading: true }));
        try {
            const apiUrl = `https://swapi.dev/api/people/?page`;
            const res = await axios.get(apiUrl);
            console.log(res);
            setAppState(prevState => ({ loading: false, repos: [...prevState.repos, ...res.data.results] }))
        }
        catch (e) {
            console.log(e);
        }
        return
    }

    const HandleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    console.log(list);
    // const userData = list?.find((index) => index.uname === data.uname)
    const HandleSubmit = () => {
        // setOpen(true)
        // setCookie('userid', data.id)
        // getData()
        if (Validate()) {
            // console.log(userData);
            const loginData = { uname: data.uname, pw: data.pw, id: data.id }
            console.log(loginData);
            console.log(data);
            dispatch(onLogin(loginData))
            setData({
                uname: '',
                pw: ''
            })
            setCookie('userid', data.id)
            history.goBack()
        }
    }

    const handleCancel = () => {
        history.goBack()
    }

    const Validate = () => {
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

    return (
        <Div>
            <Header />
            <Background>
                <Logindetail>
                    <Loginform>Login Form</Loginform>
                    <Name>Username</Name>
                    <Input type="text" placeholder="Username" name='uname' value={data.uname} onChange={HandleChange}></Input>
                    <lable style={{ color: "red", fontSize: "14px" }}>{data.unameErr}</lable>
                    <Name>Password</Name>
                    <Input type="text" placeholder="Password" name='pw' value={data.pw} onChange={HandleChange}></Input>
                    <lable style={{ color: "red", fontSize: "14px" }}>{data.pwErr}</lable>
                    <Groupbtn>
                        <Btnlogin type="button" onClick={HandleSubmit}>LOGIN</Btnlogin>
                        <Cancelbtn type="button" onClick={handleCancel}>CANCEL</Cancelbtn>
                    </Groupbtn>
                    {open && <div>{appState.loading ? <div> <i className="fa fa-spinner fa-spin" /> Loading...</div> : <div style={{ color: "red" }}>Login failed!!!</div>}</div>}
                </Logindetail>
            </Background>
            <Footer />
        </Div>
    )
}

export default Login
