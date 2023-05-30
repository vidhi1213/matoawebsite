import React from 'react'
import { DivLight, Img, Div1, DivDark, DivDark1, Div2, Img1, Para1, Para2, Para3, Para4, Div3, Para5, Para6, Para7, Img2, Div4, Line, Para8, Div5, Div2New, Div2old } from './Style'
import img1 from './Images/image 25.png'
import img2 from './Images/image 26.png'
import img3 from './Images/image 27.png'
import img4 from './Images/image 28.png'
import img5 from './Images/image 29.png'
import img6 from './Images/image 32.png'
import img7 from './Images/image 33.png'
import img8 from './Images/image 34.png'
import img9 from './Images/image 35.png'
import img10 from './Images/image 36.png'
import img11 from './Images/image 30.png'
import img12 from './Images/Facebook.png'
import img13 from './Images/Instagram.png'
import img14 from './Images/Twitter.png'
import img15 from './Images/Youtube.png'
const Footer = () => {
    return (
        <>
            < DivLight >
                <Div1>
                    <Img src={img1} alt='image' />
                    <Img src={img2} alt='image' />
                    <Img src={img3} alt='image' />
                    <Img src={img4} alt='image' />
                    <Img src={img5} alt='image' />
                </Div1>
                <Div1>
                    <Img src={img6} alt='image' />
                    <Img src={img7} alt='image' />
                    <Img src={img8} alt='image' />
                    <Img src={img9} alt='image' />
                    <Img src={img10} alt='image' />
                </Div1>
            </DivLight >
            <DivDark >
                <DivDark1 >
                    <Div2>
                        <Img1 src={img11} alt="image" />
                        <Para1>Address</Para1>
                        <Para2>Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa, Sukasari, Bandung, Jawa Barat, Indonesia 40152</Para2>
                        <Para3 >Office Hour</Para3 >
                        <Para4>Monday - Sunday 10.00 - 18.00</Para4>
                    </Div2>
                    <Div2New>
                        <Para5>Get in touch</Para5>
                        <Line></Line>
                        <Div3>
                            <Para6>Phone</Para6>
                            <Para7>022-20277564</Para7>
                        </Div3>
                        <Div3>
                            <Para6>Service Center</Para6>
                            <Para7>0811-233-8899</Para7>
                        </Div3>
                        <Div3>
                            <Para6>Customer Service</Para6>
                            <Para7>0811-235-9988</Para7>
                        </Div3>
                        <Div4>
                            <Img2 src={img12} alt="image" />
                            <Img2 src={img13} alt="image" />
                            <Img2 src={img14} alt="image" />
                            <Img2 src={img15} alt="image" />
                        </Div4>
                    </Div2New>
                    <Div2New>
                        <Para5>Useful Link</Para5>
                        <Line></Line>
                        <Div5>
                            <Para8>Warranty & Complaints</Para8>
                            <Para8>Order & Shipping</Para8>
                            <Para8> Tracking Order</Para8>
                            <Para8>About Us</Para8>
                            <Para8>Repair</Para8>
                            <Para8>Terms</Para8>
                            <Para8>FAQ</Para8>
                        </Div5>
                    </Div2New>
                    <Div2old>
                        <Para5>Campaign</Para5>
                        <Line></Line>
                        <Div5>
                            <Para8>Mengenal Arti Cukup</Para8>
                            <Para8>Tell Your Difference</Para8>
                            <Para8>  Waykambas </Para8>
                            <Para8>Rebrand </Para8>
                            <Para8>Gallery</Para8>
                            <Para8>Singo</Para8>
                            <Para8> Rakai</Para8>
                        </Div5>
                    </Div2old>
                </DivDark1 >
            </DivDark>
        </>
    )
}
export default Footer;
