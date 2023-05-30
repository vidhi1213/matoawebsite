import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Modal from 'react-modal'
import { updateData } from './action/action.js'
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import users from './Images/users.png'
import user from './Images/user.png'
import {
    Image, WatchText1, MBtn, MMerge, MMerge2, Inputs, MMerge3, Div, Background, Logindetail, Imageuser, Btnlogin, Btnlogins, Continue, Pdetail, Name, Input, Dtextnew,
    Select, Citycode, City, Code, Selects, Input1, Inp, Inp1, Select1, Selects1, Continue1
} from './Styles.js';

const Profile = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState(false)
    const [inputs, setInputs] = useState(false)
    const [show, setShow] = useState(false);
    const list = useSelector((state) => state.reducer.dataSource)
    const dispatch = useDispatch();

    const userData = list.find((index) => index.key === cookies.userid)
    console.log(userData);
    console.log(userData?.uname);
    const [data, setData] = useState({
        uname: '',
        pw: '',
        cuname: '',
        opw: '',
        npw: '',
        cpw: '',
        id: userData?.key,
        unameErr: '',
        pwErr: '',
        cpwErr: '',
        submitErr: '',
        cunameErr: '',
        cpwErr: '',
        address: '',
        fname: '',
        PhNo: '',
        country: '',
        state: '',
        city: '',
        zipCode: '',
        courier: '',
        fnameErr: '',
        PhNoErr: '',
        zipCodeErr: '',
        countryErr: '',
        stateErr: '',
        cityErr: '',
        courierErr: '',
        addressErr: '',
        adduname: ''
    })

    console.log(list);

    const HandleCheck = () => {
        if (validation()) {
            setInput(true)
        }
    }
    const HandleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    const handleEdit = () => {
        setOpen(true)
        setData({ ...data, uname: userData?.uname, pw: userData?.pw })
    }

    const handleEdits = () => {
        setInputs(true);
        setOpen(true)
        setData({ ...data, uname: userData?.uname, pw: userData?.pw })
    }

    const handleAddress = () => {
        setShow(true)
        setData({ ...data, uname: userData?.uname, pw: userData?.pw, address: userData?.address, fname: userData?.fname, PhNo: userData?.PhNo, country: userData?.country, state: userData?.state, city: userData?.city, zipCode: userData?.zipCode, courier: userData?.courier, adduname: userData?.adduname })
    }
    const submitAddress = () => {
        if (validateAll()) {
            const newdata = { uname: data.uname, pw: data.pw, id: data.id, address: data.address, fname: data.fname, PhNo: data.PhNo, country: data.country, state: data.state, city: data.city, zipCode: data.zipCode, courier: data.courier, adduname: data.adduname }
            console.log(newdata);
            dispatch(updateData(newdata))
        }
    }

    const handleSubmit = () => {
        console.log(Validate());
        if (Validate()) {
            console.log('!!!!!!!!!');
            const newdata = { uname: data.uname, pw: data.pw, id: data.id }
            console.log(newdata);
            dispatch(updateData(newdata))
        }
    }
    const handleSubmits = () => {
        if (validates()) {
            const newdata = { uname: data.uname, pw: data.npw, id: data.id }
            // console.log(newdata);
            dispatch(updateData(newdata))
            setData({
                cuname: '',
                opw: '',
                npw: '',
                cpw: '',
            })
        }
    }

    const validateAll = () => {
        let unameErr = '';
        let fnameErr = '';
        let PhNoErr = '';
        let addressErr = '';
        let zipCodeErr = '';
        let countryErr = '';
        let stateErr = '';
        let cityErr = '';
        let courierErr = '';

        if (data.adduname === '') {
            unameErr = 'Email must be filled out!!'
        } else {
            if (!data.adduname?.match(userData?.uname)) {
                console.log('!!!');
                unameErr = 'Email not valid!!'
            }
        }

        if (!data.fname) {
            fnameErr = "Full Name Must Be Filled Out!!"
        }
        else {
            if (/\d/.test(data.fname)) {
                fnameErr = 'Full Name only include character!!'
            }
            else {
                if ((data.fname).length < 3 || (data.fname).length > 20) {
                    fnameErr = 'Full Name should contain atleast 3 characters and atmost 20 characters in length!!'
                }
            }
        }

        if (data.PhNo === '') {
            PhNoErr = 'Phone Number must be filled out!!'
        }
        else {
            if (!data.PhNo?.match(/[1-9]{1}\d{9}/) || (data.PhNo).length !== 10) {
                PhNoErr = 'Phone Number must include 10 digits & exclude 0 as a first digit!!'
            }
        }

        if (data.zipCode === '') {
            zipCodeErr = 'Zip Code must be filled out!!'
        }
        else {
            if (!data.zipCode?.match(/\d{6}/) || (data.zipCode)?.length !== 6) {
                zipCodeErr = 'Zip Code must include 6 digits'
            }
        }

        if (!data.address) {
            addressErr = "Address Must Be Filled Out!!"
        }
        if (!data.country) {
            countryErr = "country Must Be Selected!!"
        }
        if (!data.state) {
            stateErr = "state Must Be Selected!!"
        }
        if (!data.city) {
            cityErr = "city Must Be Selected!!"
        }
        if (!data.courier) {
            courierErr = "courier  Must Be Selected!!"
        }

        setData({
            ...data,
            unameErr, fnameErr, PhNoErr, addressErr, zipCodeErr, countryErr, stateErr, cityErr, courierErr
        })
        if (unameErr || fnameErr || PhNoErr || addressErr || zipCodeErr || countryErr || stateErr || cityErr || courierErr) {
            return false;
        }
        else {
            return true;
        }

    }

    const validates = () => {
        let cpwErr = '';
        let pwErr = '';
        if (data.npw === '') {
            pwErr = 'Password must be filled out!!'
        }
        else {
            if ((data.npw).length < 8) {
                pwErr = 'Password should contain atleast 8 characters!!'
            }
            else {
                if (!data.npw.match(/\d/i)) {
                    pwErr = 'Password should contain atleast 1 number!!'
                }
                else {
                    if (!data.npw.match(/[a-z]/)) {
                        pwErr = 'Password should contain atleast 1 letter!!'
                    }
                    else {
                        if (!data.npw.match(/[A-Z]/)) {
                            pwErr = 'Password should contain atleast 1 UpperCase letter!!'
                        }
                    }
                }
            }
        }
        if (data.cpw === '') {
            cpwErr = 'Confirm Password must be filled out!!'
        }
        else {
            if (!data.cpw.match(data.npw)) {
                cpwErr = 'Confirm Password must be same!!'
            }
        }
        setData({
            ...data,
            pwErr,
            cpwErr
        })
        if (cpwErr || pwErr) {
            return false;
        }
        else {
            return true;
        }
    }

    const validation = () => {
        let cunameErr = '';
        let opwErr = '';

        if (data.cuname === '') {
            cunameErr = 'Email must be filled out!!'
        } else {
            if (!data.cuname.match(data.uname)) {
                cunameErr = 'Email not valid!!'
            }
        }
        if (data.opw === '') {
            opwErr = 'Password must be filled out!!'
        }
        else {
            if (!data.opw.match(data.pw)) {
                opwErr = 'Password not valid!!'
            }
        }

        setData({
            ...data,
            cunameErr,
            opwErr,

        })
        if (cunameErr || opwErr) {
            return false;
        }
        else {
            return true;
        }
    }

    const Validate = () => {
        let unameErr = '';

        if (data.uname === '') {
            unameErr = 'Email must be filled out!!'
        }
        else {
            if (!data.uname.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                unameErr = 'Email address must be valid email.';
            }

        }

        setData({
            ...data,
            unameErr,
        })
        if (unameErr) {
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
                    <MMerge>
                        <Imageuser src={users} alt="user" />
                    </MMerge>
                    <WatchText1>Username</WatchText1>
                    <MMerge2>{userData?.uname}<i class="fa fa-edit" onClick={() => handleEdit()} ></i></MMerge2>
                    <WatchText1>Password</WatchText1>
                    <MMerge2>{userData?.pw}<i class="fa fa-edit" onClick={() => handleEdits()}></i></MMerge2>
                    <WatchText1>Address</WatchText1>
                    <MMerge2>{userData?.address}{userData?.address ? <i class="fa fa-edit" onClick={() => handleAddress()}></i> : <div><Btnlogins type="button" onClick={() => handleAddress()}>ADD</Btnlogins></div>}</MMerge2>
                </Logindetail>
            </Background>
            <Modal className='modal_style' isOpen={open}>
                <MMerge>
                    <Image src={user} alt="user" />
                    <MBtn type='button' onClick={() => { setOpen(false); setInputs(false); setInput(false) }} ><i class="fa fa-times-circle"></i></MBtn>
                </MMerge>
                {inputs ?
                    <div>
                        <Continue>Continue to Change Password</Continue>
                        <div>
                            <WatchText1>Username</WatchText1>
                            <MMerge3><Inputs type="text" placeholder="Username" name='cuname' value={data.cuname} onChange={HandleChange}></Inputs>
                            </MMerge3>
                            <lable style={{ color: "red", fontSize: "14px" }}>{data.cunameErr}</lable>
                        </div>
                        <div>
                            <WatchText1>Old Password</WatchText1>
                            <MMerge3><Inputs type="text" placeholder="Password" name='opw' value={data?.opw} onChange={HandleChange}></Inputs></MMerge3>
                            <lable style={{ color: "red", fontSize: "14px" }}>{data.opwErr}</lable>
                            <div><Btnlogins type="button" onClick={HandleCheck}>CONFIRM</Btnlogins></div>
                            {input &&
                                <div><WatchText1>New Password</WatchText1>
                                    <MMerge3><Inputs type="text" placeholder="Password" name='npw' value={data?.npw} onChange={HandleChange}></Inputs></MMerge3>
                                    <lable style={{ color: "red", fontSize: "14px" }}>{data.pwErr}</lable>
                                    <WatchText1>Confirm Password</WatchText1>
                                    <MMerge3><Inputs type="text" placeholder="Password" name='cpw' value={data?.cpw} onChange={HandleChange}></Inputs></MMerge3>
                                    <lable style={{ color: "red", fontSize: "14px" }}>{data.cpwErr}</lable>
                                    <div><Btnlogins type="button" onClick={() => handleSubmits()}>UPDATE</Btnlogins></div>
                                </div>}
                        </div>
                    </div> :
                    <div>
                        <Continue>Continue to Change Username</Continue>
                        <WatchText1>Username</WatchText1>
                        <MMerge3><Inputs type="text" placeholder="Username" name='uname' value={data.uname} onChange={HandleChange}></Inputs>
                            <i class="fa fa-check" onClick={() => handleSubmit()}></i></MMerge3>
                        <lable style={{ color: "red", fontSize: "14px" }}>{data.unameErr}</lable>
                    </div>
                }
            </Modal>
            <Modal className='modal_style1' isOpen={show}>
                <MMerge>
                    <Image src={user} alt="user" />
                    <MBtn type='button' onClick={() => { setShow(false) }} ><i class="fa fa-times-circle"></i></MBtn>
                </MMerge>
                <Continue1>User Information</Continue1>
                {/* <MMerge3><Inputs type="text" placeholder="Address" name='address' value={data?.address} onChange={HandleChange}></Inputs></MMerge3>
                <div><Btnlogins type="button" onClick={() => submitAddress()}>ADD</Btnlogins></div> */}

                <Pdetail>
                    <Name>Fullname</Name>
                    <Inp type="text" placeholder="Ex: Rasyidin Arsyad Nasution" name='fname' value={data.fname} onChange={HandleChange}></Inp>
                    <div><lable style={{ color: "red", fontSize: "14px" }}>{data.fnameErr}</lable></div>
                    <Name>Email Address</Name>
                    <Inp type="text" placeholder="Ex: rasyid.arsyad@gmail.com" name='adduname' value={data.adduname} onChange={HandleChange}></Inp>
                    <div><lable style={{ color: "red", fontSize: "14px" }}>{data.unameErr}</lable></div>
                    <Name>Phone Number</Name>
                    <Inp type="text" placeholder="Ex: 089111888999" name='PhNo' value={data.PhNo} onChange={HandleChange}></Inp>
                    <div><lable style={{ color: "red", fontSize: "14px" }}>{data.PhNoErr}</lable></div>
                    <Name>Shipping Address</Name>
                    <Inp type="text" placeholder="Ex: Patriot Street Number 666, Ngaklik, Sleman" name='address' value={data?.address} onChange={HandleChange}></Inp>
                    <div><lable style={{ color: "red", fontSize: "14px" }}>{data.addressErr}</lable></div>
                    <Name>Country</Name>
                    <Select1 id="country" name="country" value={data.country} onChange={HandleChange}>
                        <option value="usa">United State of America (USA)</option>
                        <option value="india">INDIA</option>
                        <option value="canada">Canada</option>
                    </Select1>
                    <div><lable style={{ color: "red", fontSize: "14px" }}>{data.countryErr}</lable></div>
                    <Name>State/Province</Name>
                    <Select1 id="country" name="state" value={data.state} onChange={HandleChange}>
                        <option value="usa">California</option>
                        <option value="india">INDIA</option>
                        <option value="canada">Canada</option>
                    </Select1>
                    <div><lable style={{ color: "red", fontSize: "14px" }}>{data.stateErr}</lable></div>
                    <Citycode>
                        <City>
                            <Name>City</Name>
                            <Selects1 id="country" name="city" value={data.city} onChange={HandleChange}>
                                <option value="usa">San Francisco</option>
                                <option value="india">INDIA</option>
                                <option value="canada">Canada</option>
                            </Selects1>
                            <div><lable style={{ color: "red", fontSize: "14px" }}>{data.cityErr}</lable></div>
                        </City>
                        <Code>
                            <Name>Zip Code</Name>
                            <Inp1 type="text" placeholder="Ex: 94024" name='zipCode' value={data.zipCode} onChange={HandleChange}></Inp1>
                            <div><lable style={{ color: "red", fontSize: "14px" }}>{data.zipCodeErr}</lable></div>
                        </Code>
                    </Citycode>
                    <Name>Choose Courier</Name>
                    <Select1 id="country" name="courier" value={data.courier} onChange={HandleChange}>
                        <option value="DHL">DHL</option>
                        <option value="india">INDIA</option>
                        <option value="canada">Canada</option>
                    </Select1>
                    <div><lable style={{ color: "red", fontSize: "14px" }}>{data.courierErr}</lable></div>
                    <div><Btnlogins type="button" onClick={() => submitAddress()}>ADD</Btnlogins></div>
                </Pdetail>
            </Modal>
            <Footer />
        </Div>
    )
}

export default Profile
