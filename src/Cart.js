import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import {
    CardBackgroung, Card, CardDiv1, CardDiv2, CardImg1, CardDiv3, CardPara1,
    CardPara2, CardPara3, CardPara4, CardPara5, CardDivMerge, CardPara6, CardDiv4, Select, Option, CardDiv5, Para13New, CardPara7, CardImg2, Border, CardLine,
    CardDiv6, CardPara8, CardPara9, CardInput, CardDiv7, CardDiv8, CardPara10, CardPara11, CardPara12, CardBtn, Btn, Div
} from './Style';
import img29 from './Images/image card1.png'
import img30 from './Images/image 17.png'
import img31 from './Images/Shape1.png'
import { useCookies } from 'react-cookie';

const Cart = () => {
    const history = useHistory();
    // const location = useLocation();
    // console.log(history);
    // console.log(location);
    const [count, setCount] = useState(1);
    const [cookies, setCookie] = useCookies(['user'])
    const HandleCheckout = () => {
        cookies.userid ?
            history.push('/multistep') :
            history.push('/login')
    }

    return (
        <Div>
            <Header />
            <CardBackgroung>
                <Card>
                    <CardDivMerge>
                        <CardDiv1>
                            <CardDiv2>
                                <CardImg1 src={img29} alt='image' />
                            </CardDiv2>
                            <CardDiv3>
                                <CardPara1>Way Kambas Mini Ebony</CardPara1>
                                <CardPara2>Rp 1.280.000</CardPara2>
                                <CardPara3>Rp 1.024.000</CardPara3>
                                <CardPara4>Custom Engrave</CardPara4>
                                <CardPara5>“Happy | Birthday | from”</CardPara5>
                            </CardDiv3>
                        </CardDiv1>
                        <CardDiv4>
                            <CardPara6>Select Packaging</CardPara6>
                            <Select>
                                <option value="Wooden Packaging (Rp 50.000)">Wooden Packaging (Rp 50.000)</option>
                            </Select>
                            <CardDiv5>
                                <Btn type='button' onClick={() => count > 1 && setCount(count - 1)}>-</Btn>
                                <Para13New>{count}</Para13New>
                                <Btn type='button' primary onClick={() => setCount(count + 1)}>+</Btn>
                                <CardPara7>Rp 1.264.000</CardPara7>
                                <Border><CardImg2 src={img31} alt='image' /></Border>
                            </CardDiv5>
                        </CardDiv4>
                    </CardDivMerge>
                    <CardLine></CardLine>
                    <CardDivMerge>
                        <CardDiv1>
                            <CardDiv2>
                                <CardImg1 src={img30} alt='image' />
                            </CardDiv2>
                            <CardDiv3>
                                <CardPara1>Sikka (Ebony & Maple)</CardPara1>
                                <CardPara3>Rp 1.264.000</CardPara3>
                            </CardDiv3>
                        </CardDiv1>
                        <CardDiv4>
                            <CardPara6>Select Packaging</CardPara6>
                            <Select>
                                <option value="Default Packaging (Free)">Default Packaging (Free)</option>
                            </Select>
                            <CardDiv5>
                                <Btn type='button' onClick={() => count > 1 && setCount(count - 1)}>-</Btn>
                                <Para13New>{count}</Para13New>
                                <Btn type='button' primary onClick={() => setCount(count + 1)}>+</Btn>
                                <CardPara7>Rp 1.264.000</CardPara7>
                                <Border><CardImg2 src={img31} alt='image' /></Border>
                            </CardDiv5>
                        </CardDiv4>
                    </CardDivMerge>
                    <CardLine></CardLine>
                    <CardDivMerge>
                        <CardDiv6>
                            <CardPara8>Kode Promo</CardPara8>
                            <CardInput type='input' placeholder='INDONESIA'></CardInput>
                            <CardPara9>35% OFF</CardPara9>
                        </CardDiv6>
                        <CardDiv7>
                            <CardPara10>Subtotal</CardPara10>
                            <CardDiv8>
                                <CardPara11>Rp 3.312.000</CardPara11>
                                <CardPara12>Rp 2.152.000</CardPara12>
                            </CardDiv8>
                        </CardDiv7>
                    </CardDivMerge>

                    <CardBtn type='button' onClick={() => HandleCheckout()}>Checkout</CardBtn>

                </Card>
            </CardBackgroung>
            <Footer />
        </Div>
    )
}

export default Cart
