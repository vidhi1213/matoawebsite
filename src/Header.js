import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import logo from './Images/logo.png'
import shape from './Images/shape.png'
import cart from './Images/cart.png'
import user from './Images/user.png'
import { Head, Logo, Nav, Content, Shape, Text, Img, Image, Main, Loginbtn, Shape1, Profile, ProfileLink, SDiv } from './Styles.js';
import { useCookies } from 'react-cookie';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Header = () => {
    const items = [
        {
            id: 0,
            name: 'Cobol'
        },
        {
            id: 1,
            name: 'JavaScript'
        },
        {
            id: 2,
            name: 'Basic'
        },
        {
            id: 3,
            name: 'PHP'
        },
        {
            id: 4,
            name: 'Java'
        }
    ]

    const history = useHistory();
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const [show, setShow] = useState(false)
    const [search, setSearch] = useState(false)


    const handleOnSearch = (string, results) => {
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        console.log(result)
    }

    const handleOnSelect = (item) => {
        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return item;
    }



    const handleLogin = () => {
        history.push('/login');
    }
    const addCart = () => {
        history.push('/cart');
    }

    const toggleDropdown = () => {
        setShow(!show)
    }

    const handleSearch = () => {
        setSearch(!search)
    }

    const handleProfile = () => {
        history.push('/profile')
    }


    return (
        <Main>
            <Head>
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
                <Nav>
                    <Content onClick={() => { history.push('/filter') }}>Watches</Content>
                    <Content onClick={() => { history.push('/filter') }}>Eyewear</Content>
                    <Content onClick={() => { history.push('/filter') }}>Accessories</Content>
                    <Content onClick={() => { history.push('/filter') }}>News</Content>
                </Nav>
                <Shape1>
                    <Shape>
                        <Image src={shape} alt="search" onClick={handleSearch} />
                        {search &&
                            <SDiv>
                                <div style={{ width: 550 }}>
                                    <ReactSearchAutocomplete
                                        items={items}
                                        onSearch={handleOnSearch}
                                        onHover={handleOnHover}
                                        onSelect={handleOnSelect}
                                        onFocus={handleOnFocus}
                                        autoFocus
                                        formatResult={formatResult}
                                    />
                                </div>
                            </SDiv>
                        }
                        {cookies.userid ?
                            <Image src={user} alt="user" onClick={toggleDropdown} /> :
                            <Text>
                                <Image src={user} alt="user" />
                                <Content><Loginbtn type="button" onClick={handleLogin}>Log In</Loginbtn></Content>
                            </Text>}
                        <Img src={cart} alt="cart" onClick={addCart} />
                    </Shape>

                    {show &&
                        <Profile>
                            <ProfileLink onClick={handleProfile}>User profile</ProfileLink>
                            <ProfileLink onClick={() => history.push('/cart')}>User order</ProfileLink>
                            <ProfileLink onClick={() => { removeCookie('userid'); setShow(!show) }}>Logout</ProfileLink>
                        </Profile>
                    }
                </Shape1>
            </Head>
        </Main>

    )
}

export default Header
