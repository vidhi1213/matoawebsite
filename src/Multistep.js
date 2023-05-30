import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { MultiStepForm, Step } from 'react-multi-form';
import { useCookies } from 'react-cookie';
import {
    Button, Container, Div, Detail, Multi, Detailorder, Bill, Dorder, Ordertext, Otext, Dline, Dtext, Dordernew, Pdetail, Name, Input, Dtextnew,
    Select, Citycode, City, Code, Selects, Inputs, Btngroup, Buttong, Otextnew, OrderMerge, PaymentDetail, PaymentDiv, PaymentDiv1, PayPara1, PayPara2,
    DetOrder, DetPara, DetDiv, Detpara1, DetDiv1, DetMerge, Detpara2, DetBtn, DetDiv2, DetDiv3, Detpara1New, Detpara1New1, PayMethod, MPara, MDiv, MDiv1, Label,
    Label1, MDivMerge, MDivMerge1, PayImgMerge, LabelMerge, Label2, PayImgMerge1, MDivMerge2, Trackpage, Track, Page, Btntrack, Ttext, TName, Pic, Picdiv, Pictext, Pagetext, Tpage, Textpage,
    Pimg, Pimgs, Pageline, Porder, Ptext, Divtext, Pordernew, Deltext, Deltextnew, Pend, Endtext, Endtextnew, MDiv2, Method, MDivMerge3, MultiPara, Input1


} from './Styles'

import imgpay1 from './Images/image 46.png'
import imgpay2 from './Images/image 381.png'
import imgpay3 from './Images/image 45.png'
import imgpay4 from './Images/image 44.png'
import imgpay5 from './Images/image 371.png'
import imgpay6 from './Images/image 43.png'
import imgpay7 from './Images/image 401.png'
import imgpay8 from './Images/image 421.png'
import imgpay9 from './Images/image 411.png'
import imgpay10 from './Images/image 391.png'
import time from "./Images/time.png"
import Courier from "./Images/courier.png"
import undraw from "./Images/undraw.png"

const Multistep = () => {
    const [active, setActive] = useState(1)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    return (
        <Div>
            <Container>
                <Header />
                <MultiPara></MultiPara>
                <MultiStepForm activeStep={active} className="multi-form" style={{ width: '718px !important' }} >
                    <Step label='1. Checkout'>
                        <Detail>
                            <Detailorder>
                                <Dtext>Detail Order</Dtext>
                                <Dorder>
                                    <Ordertext>
                                        <Otext>Subtotal</Otext>
                                        <Otext>Shipping Cost</Otext>
                                        <Otext> Promo Code</Otext>
                                        <Otext>Packaging</Otext>
                                    </Ordertext>
                                    <Ordertext>
                                        <Otext>Rp 2.152.000</Otext>
                                        <Otext>Rp 500.000</Otext>
                                        <Otext>INDONESIA</Otext>
                                        <Otext>Rp 50.000</Otext>
                                    </Ordertext>
                                </Dorder>
                                <Dline></Dline>
                                <Dordernew>

                                    <Otext>Grand Total</Otext>

                                    <Otextnew>Rp 2.702.000</Otextnew>

                                </Dordernew>
                            </Detailorder>
                            <Bill>
                                <Dtextnew>Billing Address</Dtextnew>
                                <Pdetail>
                                    <Name>Fullname</Name>
                                    <Input type="text" placeholder="Ex: Rasyidin Arsyad Nasution"></Input>
                                    <Name>Email Address</Name>
                                    <Input type="text" placeholder="Ex: rasyid.arsyad@gmail.com"></Input>
                                    <Name>Phone Number</Name>
                                    <Input type="text" placeholder="Ex: 089111888999"></Input>
                                    <Name>Shipping Address</Name>
                                    <Input type="text" placeholder="Ex: Patriot Street Number 666, Ngaklik, Sleman"></Input>
                                    <Name>Country</Name>
                                    <Select id="country" name="country">
                                        <option value="usa">United State of America (USA)</option>
                                        <option value="india">INDIA</option>
                                        <option value="canada">Canada</option>
                                    </Select>
                                    <Name>State/Province</Name>
                                    <Select id="country" name="country">
                                        <option value="usa">California</option>
                                        <option value="india">INDIA</option>
                                        <option value="canada">Canada</option>
                                    </Select>
                                    <Citycode>
                                        <City>
                                            <Name>City</Name>
                                            <Selects id="country" name="country">
                                                <option value="usa">San Francisco</option>
                                                <option value="india">INDIA</option>
                                                <option value="canada">Canada</option>
                                            </Selects>
                                        </City>
                                        <Code>
                                            <Name>Zip Code</Name>
                                            <Input1 type="text" placeholder="Ex: 94024"></Input1>
                                        </Code>
                                    </Citycode>
                                    <Name>Choose Courier</Name>
                                    <Select id="country" name="country">
                                        <option value="usa">DHL</option>
                                        <option value="india">INDIA</option>
                                        <option value="canada">Canada</option>
                                    </Select>
                                </Pdetail>
                            </Bill>
                        </Detail>
                    </Step>
                    <Step label='2. Payment'>
                        <Detail>
                            <OrderMerge>
                                <Detailorder>
                                    <Dtext>Detail Order</Dtext>
                                    <Dorder>
                                        <Ordertext>
                                            <Otext>Subtotal</Otext>
                                            <Otext>Shipping Cost</Otext>
                                            <Otext> Promo Code</Otext>
                                            <Otext>Packaging</Otext>
                                        </Ordertext>
                                        <Ordertext>
                                            <Otext>Rp 2.152.000</Otext>
                                            <Otext>Rp 500.000</Otext>
                                            <Otext>INDONESIA</Otext>
                                            <Otext>Rp 50.000</Otext>
                                        </Ordertext>
                                    </Dorder>
                                    <Dline></Dline>
                                    <Dordernew>
                                        <Otext>Grand Total</Otext>
                                        <Otextnew>Rp 2.702.000</Otextnew>
                                    </Dordernew>
                                </Detailorder>
                                <PaymentDetail>
                                    <PaymentDiv>
                                        <PayPara1>Payment Detail</PayPara1>
                                        <PayPara2>11:55:55</PayPara2>
                                    </PaymentDiv>
                                    <PaymentDiv1>
                                        Please make a payment according with the limit time specified, starting from now
                                    </PaymentDiv1>
                                </PaymentDetail>
                            </OrderMerge>
                            <DetOrder>
                                <DetPara>Order Detail</DetPara>
                                <DetDiv>
                                    <Detpara1>Order Number</Detpara1>
                                    <DetDiv1>
                                        <DetMerge>
                                            <Detpara2>MTAWEB-3A86D4DB</Detpara2>
                                            <DetBtn type='button'>COPY</DetBtn>
                                        </DetMerge>
                                        <DetDiv2>Always remember Order Number for easy tracking</DetDiv2>
                                    </DetDiv1>
                                </DetDiv>
                                <DetDiv3>
                                    <Detpara1>Purchase Date</Detpara1>
                                    <Detpara1New>2019-11-07 14:01:48</Detpara1New>
                                </DetDiv3>
                                <DetDiv3>
                                    <Detpara1>Items</Detpara1>
                                    <Detpara1New1>Way Kambas Mini Ebony
                                        2 x IDR 1.024.000
                                        Sikka (Ebony & Mapple)
                                        1 x IDR 1.264.000</Detpara1New1>
                                </DetDiv3>
                                <DetDiv3>
                                    <Detpara1>Name</Detpara1>
                                    <Detpara1New>Rasyidin Arsyad Nasution</Detpara1New>
                                </DetDiv3>
                                <DetDiv3>
                                    <Detpara1>Phone</Detpara1>
                                    <Detpara1New>+18911188899</Detpara1New>
                                </DetDiv3>
                                <DetDiv3>
                                    <Detpara1>Email</Detpara1>
                                    <Detpara1New>rasyid.arsyad@gmail.com</Detpara1New>
                                </DetDiv3>
                                <DetDiv3>
                                    <Detpara1>Shipping Address</Detpara1>
                                    <Detpara1New>18 Richardson Drive
                                        Fountain Valley, CA 92708</Detpara1New>
                                </DetDiv3>
                            </DetOrder>
                        </Detail>
                        <PayMethod>
                            <MPara>Payment Method</MPara>
                            <Method>
                                <MDiv>
                                    <MDivMerge>
                                        <input type="radio" id="PM1" name="payMethod" style={{ width: '24px', height: '24px' }} />
                                        <LabelMerge>
                                            <Label for="PM1">BNI Cicilan 0%</Label>
                                            <img src={imgpay1} alt='img' style={{ width: '100px', height: '100px' }} />
                                        </LabelMerge>
                                    </MDivMerge>
                                    <MDivMerge1>
                                        <input type="radio" id="PM2" name="payMethod" style={{ width: '24px', height: '24px' }} />
                                        <LabelMerge>
                                            <Label1 for="PM1">Mandiri Cicilan 0%</Label1>
                                            <img src={imgpay2} alt='img' style={{ width: '100px', height: '100px' }} />
                                        </LabelMerge>
                                    </MDivMerge1>
                                    <MDivMerge>
                                        <input type="radio" id="PM3" name="payMethod" style={{ width: '24px', height: '24px' }} />
                                        <LabelMerge>
                                            <Label for="PM1">Bank Transfer</Label>
                                            <img src={imgpay3} alt='img' style={{ width: '100px', height: '100px' }} />
                                        </LabelMerge>
                                    </MDivMerge>
                                    <MDivMerge3>
                                        <input type="radio" id="PM4" name="payMethod" style={{ width: '24px', height: '24px' }} />
                                        <LabelMerge>
                                            <Label for="PM1">Credit Card</Label>
                                            <PayImgMerge>
                                                <img src={imgpay4} alt='img' style={{ width: '100px', height: '100px' }} />
                                                <img src={imgpay5} alt='img' style={{ width: '100px', height: '100px' }} />
                                            </PayImgMerge>
                                        </LabelMerge>
                                    </MDivMerge3>
                                </MDiv>
                                <MDiv2>
                                    <MDivMerge2>
                                        <input type="radio" id="PM5" name="payMethod" style={{ width: '24px', height: '24px' }} />
                                        <LabelMerge>
                                            <Label2 for="PM1">Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)</Label2>
                                            <PayImgMerge1>
                                                <img src={imgpay6} alt='img' style={{ width: '100px', height: '100px' }} />
                                                <img src={imgpay7} alt='img' style={{ width: '100px', height: '100px' }} />
                                                <img src={imgpay8} alt='img' style={{ width: '100px', height: '100px' }} />
                                            </PayImgMerge1>
                                        </LabelMerge>
                                    </MDivMerge2>
                                    <MDivMerge>
                                        <input type="radio" id="PM6" name="payMethod" style={{ width: '24px', height: '24px' }} />
                                        <LabelMerge>
                                            <Label for="PM1">GO-PAY</Label>
                                            <img src={imgpay9} alt='img' style={{ width: '100px', height: '100px' }} />
                                        </LabelMerge>
                                    </MDivMerge>
                                    <MDivMerge>
                                        <input type="radio" id="PM7" name="payMethod" style={{ width: '24px', height: '24px' }} />
                                        <LabelMerge>
                                            <Label for="PM1">Krdivo</Label>
                                            <img src={imgpay10} alt='img' style={{ width: '100px', height: '100px' }} />
                                        </LabelMerge>
                                    </MDivMerge>
                                </MDiv2>
                            </Method>
                        </PayMethod>
                    </Step>
                    <Step label='3. Confirmation'>
                        <Trackpage>
                            <Track>
                                <img src={undraw} />
                                <Ttext>Order Confirmed</Ttext>
                                <TName>Your order have been confirmed, please wait and track your order</TName>
                                <Btntrack >Go to track page</Btntrack>
                            </Track>
                            <Page>
                                <Pic>
                                    <Picdiv>
                                        <Pimg src={time} />
                                        <Pictext>10 days delivery</Pictext>
                                    </Picdiv>
                                    <Picdiv>
                                        <Pimgs src={Courier} />
                                        <Pictext>DHL Express</Pictext>
                                    </Picdiv>
                                </Pic>
                                <Pagetext>
                                    <Textpage>Way Kambas Mini Ebony </Textpage>
                                    <Tpage>2 x IDR 1.024.000</Tpage>
                                    <Textpage>Sikka (Ebony & Mapple) </Textpage>
                                    <Tpage>1 x IDR 1.264.000</Tpage>
                                </Pagetext>
                                <Porder>
                                    <Divtext>
                                        <Ptext>Subtotal</Ptext>
                                        <Ptext>Shipping Cost</Ptext>
                                        <Ptext>Packaging</Ptext>
                                    </Divtext>
                                    <Divtext>
                                        <Ptext>Rp 2.152.000</Ptext>
                                        <Ptext>Rp 500.000</Ptext>
                                        <Ptext>Rp 50.000</Ptext>
                                    </Divtext>
                                </Porder>
                                <Pageline></Pageline>
                                <Pordernew>
                                    <Deltext>Grand Total</Deltext>
                                    <Deltextnew>Rp 2.702.000</Deltextnew>
                                </Pordernew>
                                <Pageline></Pageline>
                                <Pend>
                                    <Endtext>Shipping Address</Endtext>
                                    <Endtextnew>18 Richardson Drive Fountain Valley, CA 92708</Endtextnew>
                                </Pend>
                            </Page>
                        </Trackpage>
                    </Step>
                </MultiStepForm>

                {active !== 1 && (
                    <Button onClick={() => setActive(active - 1)}>Previous</Button>
                )}
                {active !== 3 && (
                    <Btngroup>
                        <Buttong primary> Continue Shopping</Buttong>
                        <Buttong onClick={() => setActive(active + 1)}>Place My Order</Buttong>
                    </Btngroup>
                )}

            </Container>
            <Footer />
        </Div>
    )
}

export default Multistep
