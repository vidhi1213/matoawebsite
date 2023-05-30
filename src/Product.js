import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useHistory } from 'react-router';
import {
    Div, Section, Section1, PDiv1, PDiv2, Img3, Img4, Img5, Img6, PDiv3, Para9, Para10, Para11, PDiv4, Para12, PDiv5, Img7, PDiv6, Btn, Para13,
    PDiv7, Btn1, PDiv8, Section2, LinkSec, Link1, LinkDesc, InfoName, InfoDesc, ImgCenter, Section3, Sec3Div1, Sec3Para1, Line1, Sec3Para2, Sec3Para3,
    Sec3Para4, Sec3Div, Img26, Marg, Marg1, Sec3Para1New, Sec3Flex, Sec3Para2New, ContentBtn
} from './Style'
import { Buttondeal, Btndeal } from './Styles'
import img16 from './Images/image 37.png'
import img17 from './Images/image-removebg-preview 1.png'
import img18 from './Images/image-removebg-preview1 1.png'
import img19 from './Images/image-removebg-preview2 1.png'
import img20 from './Images/image 6.png'
import img21 from './Images/image 38.png'
import img22 from './Images/image 39.png'
import img23 from './Images/add-cart.png'
import img24 from './Images/Imported Layers.png'
import img25 from './Images/image 40.png'
import img26 from './Images/image 9.png'
import img27 from './Images/image 41.png'
import img28 from './Images/image 42.png'
import love from './Images/love.png'
const Product = () => {

    const history = useHistory();
    const [count, setCount] = useState(1);
    const [content, setContent] = useState({
        view: <LinkDesc>
            <InfoName>Material</InfoName>
            <InfoDesc>MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.</InfoDesc>
            <InfoName>Case</InfoName>
            <InfoDesc>The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.</InfoDesc>
            <InfoName>Movement</InfoName>
            <InfoDesc>For the first time, MATOA comes with Seiko Quartz VD78 movement with small second function. A small second hand is above 6 o'clock position. This second hand dial is dedicated to Sumatran Rhino whom every second of its life is so precious because whenever Sumatran Rhino goes, it can be threatened by illegal poaching</InfoDesc>
            <InfoName>Dial</InfoName>
            <InfoDesc>In the dial, there are double layer of Makassar Ebony Veneer with 3, 9 & 12 o'clock laser cut brass plate index.</InfoDesc>
            <InfoName>Hand</InfoName>
            <InfoDesc>The hour, minute & small second hands on MATOA Way Kambas - Sumatran Rhino is outfitted with skeleton hand and brush finished with Gold Matte color. This new design aims at adding a value for this special edition.</InfoDesc>
            <InfoName>Important to Note</InfoName>
            <InfoDesc>Wood color on watches is produced from a combination of mature and fresh wood but should not be viewed as a defect. It is a very natural process of wood aging.</InfoDesc>
            <ImgCenter><img src={img25} alt='image' /></ImgCenter>
        </LinkDesc>
    })
    const HandleCart = () => {
        history.push('/cart')
    }

    const addCart = () => {
        history.push('/cart');
    }

    const handleLink = (choose) => {
        if (choose === 'detail') {
            setContent({
                view: <LinkDesc>
                    <InfoName>Material</InfoName>
                    <InfoDesc>MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.</InfoDesc>
                    <InfoName>Case</InfoName>
                    <InfoDesc>The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.</InfoDesc>
                    <InfoName>Movement</InfoName>
                    <InfoDesc>For the first time, MATOA comes with Seiko Quartz VD78 movement with small second function. A small second hand is above 6 o'clock position. This second hand dial is dedicated to Sumatran Rhino whom every second of its life is so precious because whenever Sumatran Rhino goes, it can be threatened by illegal poaching</InfoDesc>
                    <InfoName>Dial</InfoName>
                    <InfoDesc>In the dial, there are double layer of Makassar Ebony Veneer with 3, 9 & 12 o'clock laser cut brass plate index.</InfoDesc>
                    <InfoName>Hand</InfoName>
                    <InfoDesc>The hour, minute & small second hands on MATOA Way Kambas - Sumatran Rhino is outfitted with skeleton hand and brush finished with Gold Matte color. This new design aims at adding a value for this special edition.</InfoDesc>
                    <InfoName>Important to Note</InfoName>
                    <InfoDesc>Wood color on watches is produced from a combination of mature and fresh wood but should not be viewed as a defect. It is a very natural process of wood aging.</InfoDesc>
                    <ImgCenter><img src={img25} alt='image' /></ImgCenter>
                </LinkDesc>
            })
        }
        else if (choose === 'warranty') {
            setContent({
                view: <LinkDesc>
                    <InfoName>warranty</InfoName>
                    <InfoDesc>MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.</InfoDesc>
                    <InfoName>Case</InfoName>
                    <InfoDesc>The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.</InfoDesc>
                    <InfoName>Movement</InfoName>
                    <InfoDesc>For the first time, MATOA comes with Seiko Quartz VD78 movement with small second function. A small second hand is above 6 o'clock position. This second hand dial is dedicated to Sumatran Rhino whom every second of its life is so precious because whenever Sumatran Rhino goes, it can be threatened by illegal poaching</InfoDesc>
                    <ImgCenter><img src={img25} alt='image' /></ImgCenter>
                </LinkDesc>
            })
        }
        else if (choose === 'Custom Engrave') {
            setContent({
                view: <LinkDesc>
                    <InfoName>Custom Engrave</InfoName>
                    <InfoDesc>MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.</InfoDesc>
                    <InfoName>Case</InfoName>
                    <InfoDesc>The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.</InfoDesc>
                    <InfoName>Movement</InfoName>
                    <InfoDesc>For the first time, MATOA comes with Seiko Quartz VD78 movement with small second function. A small second hand is above 6 o'clock position. This second hand dial is dedicated to Sumatran Rhino whom every second of its life is so precious because whenever Sumatran Rhino goes, it can be threatened by illegal poaching</InfoDesc>
                    <InfoName>Dial</InfoName>
                    <InfoDesc>In the dial, there are double layer of Makassar Ebony Veneer with 3, 9 & 12 o'clock laser cut brass plate index.</InfoDesc>
                    <ImgCenter><img src={img25} alt='image' /></ImgCenter>
                </LinkDesc>
            })
        }
        else if (choose === 'How to Adjust') {
            setContent({
                view: <LinkDesc>
                    <InfoName>How to Adjust</InfoName>
                    <InfoDesc>MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.</InfoDesc>
                    <InfoName>Case</InfoName>
                    <InfoDesc>The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.</InfoDesc>
                    <ImgCenter><img src={img25} alt='image' /></ImgCenter>
                </LinkDesc>
            })
        }
        else if (choose === 'How to Care') {
            setContent({
                view: <LinkDesc>
                    <InfoName>How to Care</InfoName>
                    <InfoDesc>MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.</InfoDesc>
                    <InfoName>Case</InfoName>
                    <InfoDesc>The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.</InfoDesc>
                    <InfoName>Movement</InfoName>
                    <InfoDesc>For the first time, MATOA comes with Seiko Quartz VD78 movement with small second function. A small second hand is above 6 o'clock position. This second hand dial is dedicated to Sumatran Rhino whom every second of its life is so precious because whenever Sumatran Rhino goes, it can be threatened by illegal poaching</InfoDesc>
                    <InfoName>Dial</InfoName>
                    <InfoDesc>In the dial, there are double layer of Makassar Ebony Veneer with 3, 9 & 12 o'clock laser cut brass plate index.</InfoDesc>
                    <InfoName>Hand</InfoName>
                    <InfoDesc>The hour, minute & small second hands on MATOA Way Kambas - Sumatran Rhino is outfitted with skeleton hand and brush finished with Gold Matte color. This new design aims at adding a value for this special edition.</InfoDesc>
                    <InfoName>Important to Note</InfoName>
                    <InfoDesc>Wood color on watches is produced from a combination of mature and fresh wood but should not be viewed as a defect. It is a very natural process of wood aging.</InfoDesc>
                    <ImgCenter><img src={img25} alt='image' /></ImgCenter>
                </LinkDesc>
            })
        }
        else if (choose === 'Gallery') {
            setContent({
                view: <LinkDesc>
                    <InfoName>Gallery</InfoName>
                    <InfoDesc>MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.</InfoDesc>
                    <InfoName>Case</InfoName>
                    <InfoDesc>The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.</InfoDesc>
                    <InfoName>Movement</InfoName>
                    <InfoDesc>For the first time, MATOA comes with Seiko Quartz VD78 movement with small second function. A small second hand is above 6 o'clock position. This second hand dial is dedicated to Sumatran Rhino whom every second of its life is so precious because whenever Sumatran Rhino goes, it can be threatened by illegal poaching</InfoDesc>
                    <ImgCenter><img src={img25} alt='image' /></ImgCenter>
                </LinkDesc>
            })
        }
    }

    return (
        <Div>
            <Header />
            <Section>
                <Section1>
                    <PDiv1>
                        <Img3 src={img16} alt='image' />
                        <Img4 src={img17} alt='image' />
                        <Img4 src={img18} alt='image' />
                        <Img5 src={img19} alt='image' />
                    </PDiv1>
                    <PDiv2>
                        <Img6 src={img20} alt='image' />
                    </PDiv2>
                    <PDiv3>
                        <Para9>WAY KAMBAS MINI EBONY</Para9>
                        <Para10>Rp 1.280.000</Para10>
                        <Para11>Rp 1.024.000</Para11>
                        <PDiv4>
                            <Para12>Choose Model</Para12>
                            <PDiv5>
                                <input type="radio" id="img1" name="fav" value="HTML" style={{ display: 'none' }} />
                                <label for="img1"><Img7 src={img21} alt='image' style={{ display: 'flex', alignItems: 'center' }} /></label>

                                <input type="radio" id="img2" name="fav" value="CSS" style={{ display: 'none' }} />
                                <label for="img2"><Img7 src={img22} alt='image' style={{ display: 'flex', alignItems: 'center' }} /></label>
                            </PDiv5>
                        </PDiv4>
                        <PDiv8>
                            <PDiv6>
                                <Btn type='button' onClick={() => count > 1 && setCount(count - 1)}>-</Btn>
                                <Para13>{count}</Para13>
                                <Btn type='button' primary onClick={() => setCount(count + 1)}>+</Btn>
                            </PDiv6>
                            <PDiv7>
                                <Btn1 type='button' onClick={() => HandleCart()} >
                                    <img src={img23} alt='image' /><p>Add to cart</p>
                                </Btn1>
                                <Btn1 type='button' primary>
                                    <img src={img24} alt='image' />
                                </Btn1>
                            </PDiv7>
                        </PDiv8>
                    </PDiv3>
                </Section1>
                <Section2>
                    <LinkSec>
                        <ContentBtn primary onClick={() => handleLink('detail')}>Detail</ContentBtn>
                        <ContentBtn onClick={() => handleLink('warranty')}>Warranty</ContentBtn>
                        <ContentBtn onClick={() => handleLink('Custom Engrave')}>Custom Engrave</ContentBtn>
                        <ContentBtn onClick={() => handleLink('How to Adjust')}>How to Adjust</ContentBtn>
                        <ContentBtn onClick={() => handleLink('How to Care')}>How to Care</ContentBtn>
                        <ContentBtn onClick={() => handleLink('Gallery')}>Gallery</ContentBtn>
                    </LinkSec>
                    {content.view}
                </Section2>
                <Section3>
                    <Sec3Div>Relate Products</Sec3Div>
                    <Line1></Line1>
                    <Sec3Flex>
                        <Sec3Div1>
                            <Sec3Para1>20% OFF</Sec3Para1>
                            <Marg>
                                <Img26 src={img26} alt='image'></Img26>
                                <Marg1>
                                    <Sec3Para2>Singo Maple</Sec3Para2>
                                    <Sec3Para3>Rp 1.500.000</Sec3Para3>
                                    <Sec3Para4>Rp 1.264.000</Sec3Para4>
                                </Marg1>
                                <Buttondeal>
                                    <Btndeal primary><img src={love} alt="love" /></Btndeal>
                                    <Btndeal onClick={addCart}>Add to cart</Btndeal>
                                </Buttondeal>
                            </Marg>
                        </Sec3Div1>
                        <Sec3Div1>
                            <Sec3Para1New>NEW</Sec3Para1New>
                            <Marg>
                                <Img26 src={img27} alt='image'></Img26>
                                <Marg1>
                                    <Sec3Para2New>Sikka (Ebony & Maple)</Sec3Para2New>
                                    <Sec3Para4>Rp 1.264.000</Sec3Para4>
                                </Marg1>
                                <Buttondeal>
                                    <Btndeal primary><img src={love} alt="love" /></Btndeal>
                                    <Btndeal onClick={addCart}>Add to cart</Btndeal>
                                </Buttondeal>
                            </Marg>
                        </Sec3Div1>
                        <Sec3Div1>
                            <Marg>
                                <Img26 src={img28} alt='image'></Img26>
                                <Marg1>
                                    <Sec3Para2>Sunda</Sec3Para2>
                                    <Sec3Para4>Rp 1.170.000</Sec3Para4>
                                </Marg1>
                                <Buttondeal>
                                    <Btndeal primary><img src={love} alt="love" /></Btndeal>
                                    <Btndeal onClick={addCart}>Add to cart</Btndeal>
                                </Buttondeal>
                            </Marg>
                        </Sec3Div1>
                        <Sec3Div1>
                            <Sec3Para1>20% OFF</Sec3Para1>
                            <Marg>
                                <Img26 src={img26} alt='image'></Img26>
                                <Marg1>
                                    <Sec3Para2>Singo Maple</Sec3Para2>
                                    <Sec3Para3>Rp 1.280.000</Sec3Para3>
                                    <Sec3Para4>Rp 960.000</Sec3Para4>
                                </Marg1>
                                <Buttondeal>
                                    <Btndeal primary><img src={love} alt="love" /></Btndeal>
                                    <Btndeal onClick={addCart}>Add to cart</Btndeal>
                                </Buttondeal>
                            </Marg>
                        </Sec3Div1>
                    </Sec3Flex>
                </Section3>
            </Section>
            <Footer />
        </Div>

    )
}

export default Product
