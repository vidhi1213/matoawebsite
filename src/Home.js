import React from 'react'
import { useHistory } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import watch from './Images/watch.png'
import addcart from './Images/addcart.png'
import logo_cicil from './Images/logo-cicil.png'
import left from './Images/left.png'
import right from './Images/right.png'
import glasses from './Images/glasses.png'
import watch1 from './Images/watch1.png'
import watch2 from './Images/watch2.png'
import watch3 from './Images/watch3.png'
import watch4 from './Images/watch4.png'
import watch5 from './Images/watch5.png'
import watch6 from './Images/watch6.png'
import watch7 from './Images/watch7.png'
import watch8 from './Images/watch8.png'
import watch9 from './Images/watch9.png'
import watch10 from './Images/watch10.png'
import love from './Images/love.png'
import hand from './Images/hand.png'
import Vector1 from './Images/Vector1.png'
import Vector2 from './Images/Vector2.png'
import glassgirl from './Images/glassgirl.png'
import Rectangle1 from './Images/Rectangle1.png'
import Rectangle2 from './Images/Rectangle2.png'
import Rectangle3 from './Images/Rectangle3.png'
import Rectangle4 from './Images/Rectangle4.png'
import Rectangle5 from './Images/Rectangle5.png'
import {
    Div, Section, Section1, Imagepart, Image1, Part, Parttext, Partline, Partline1, Button, Buttons, Btndeal, Buttondeal, Buttondis, Content1,
    Content2, Contents, Imgbtn, Btn, Btn1, Btns, Section2, Eyewear, Eyearea, EyeText, EyeTexts, Eyecontext, Span, Glasses, Section2Part, Watch,
    Section3, Cards, Card, Card1, Watch2, WatchText, WatchText1, Watchcontext, Cardcontent, Section4, Travel, Travelcontent, Travelimg, Handimg,
    Section5, Series, Seriesdiv, Seriesdiv1, Imgdiv, Watchseries, Imgcontent, Line, Line1, Buttondisc, Section6, Glassimg, Glasscont,
    Contentglass, Girlimg, Partlines, Arrow, Btnarrow, Section7, Instapic
} from './Styles'
const Home = () => {

    const history = useHistory();
    const addCart = () => {
        history.push('/cart');
    }
    const addProduct = () => {
        history.push('/product');
    }
    return (
        <div>
            <Div>
                <Header />

                <Section>
                    <Section1>
                        <Imagepart>
                            <Image1 src={watch} alt="watch" />
                            <Part>
                                <Parttext>WAY KAMBAS MINI EBONY</Parttext>
                                <Partline></Partline>
                                <Content1>MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.</Content1>
                                <Content2>Discover</Content2>
                                <Partline1></Partline1>
                                <Buttons>
                                    <Button onClick={addCart}><Imgbtn><img src={addcart} alt="cartbutton" /><div>Add to cart</div></Imgbtn></Button>
                                    <Button primary><img src={logo_cicil} alt="logo-cicil" /></Button>
                                </Buttons>
                            </Part>
                            <Btns>
                                <Btn ><img src={left} alt="left" /></Btn>
                                <Btn1><img src={right} alt="right" /></Btn1>
                            </Btns>
                        </Imagepart>
                    </Section1>
                    <Section2>
                        <Section2Part>
                            <Eyewear>
                                <Eyearea>
                                    <EyeText>Luxurious <Span>Eyewear</Span></EyeText>
                                    <Eyecontext>See the beauty of exotic world with the luxurious glasses</Eyecontext>
                                    <Content2>Discover Now</Content2>
                                    <Partline></Partline>
                                </Eyearea>
                                <Glasses src={glasses} alt="left" />
                            </Eyewear>
                            <Eyewear>
                                <Eyearea>
                                    <EyeText>Comfortable <Span>Watches</Span></EyeText>
                                    <Eyecontext>Feels the balancing function and beauty in our wooden watches</Eyecontext>
                                    <Content2>Discover Now</Content2>
                                    <Partline></Partline>
                                </Eyearea>
                                <Watch src={watch1} alt="left" />
                            </Eyewear>
                        </Section2Part>
                    </Section2>
                    <Section3>
                        <Contents>Monthly Deals</Contents>
                        <Partline></Partline>
                        <Cards>
                            <Card1>
                                <Watch2 src={watch2} alt="left" onClick={() => history.push('/product')} />
                                <Cardcontent>
                                    <div onClick={() => history.push('/product')}>
                                        <WatchText>Singo Maple</WatchText>
                                        <Eyecontext>20% Off</Eyecontext>
                                        <Watchcontext>Rp 1.500.000</Watchcontext>
                                        <EyeText>Rp 1.264.000</EyeText>
                                    </div>
                                    <Buttondeal>
                                        <Btndeal primary><img src={love} alt="love" /></Btndeal>
                                        <Btndeal onClick={addCart}>Add to cart</Btndeal>
                                    </Buttondeal>
                                </Cardcontent>
                            </Card1>
                            <Card1>
                                <Watch2 src={watch3} alt="left" onClick={() => history.push('/product')} />
                                <Cardcontent>
                                    <div onClick={() => history.push('/product')}>
                                        <WatchText>Singo Ebony</WatchText>
                                        <Eyecontext>20% Off</Eyecontext>
                                        <Watchcontext>Rp 1.500.000</Watchcontext>
                                        <EyeText>Rp 1.264.000</EyeText>
                                    </div>
                                    <Buttondeal>
                                        <Btndeal primary><img src={love} alt="love" /></Btndeal>
                                        <Btndeal onClick={addCart}>Add to cart</Btndeal>
                                    </Buttondeal>
                                </Cardcontent>
                            </Card1>
                            <Card1>
                                <Watch2 src={watch4} alt="left" onClick={() => history.push('/product')} />
                                <Cardcontent>
                                    <div onClick={() => history.push('/product')}>
                                        <WatchText>Rakai Ebony</WatchText>
                                        <Eyecontext>15% Off</Eyecontext>
                                        <Watchcontext>Rp 1.280.000</Watchcontext>
                                        <EyeText>Rp 1.118.000</EyeText>
                                    </div>
                                    <Buttondeal>
                                        <Btndeal primary><img src={love} alt="love" /></Btndeal>
                                        <Btndeal onClick={addCart}>Add to cart</Btndeal>
                                    </Buttondeal>
                                </Cardcontent>
                            </Card1>
                            <Card>
                                <Watch2 src={watch5} alt="left" onClick={() => history.push('/product')} />
                                <Cardcontent>
                                    <div onClick={() => history.push('/product')}>
                                        <WatchText>Way Kambas Mini Maple</WatchText>
                                        <Eyecontext>10% Off</Eyecontext>
                                        <Watchcontext>Rp 1.280.000</Watchcontext>
                                        <EyeText>Rp 1.024.000</EyeText>
                                    </div>
                                    <Buttondeal>
                                        <Btndeal primary><img src={love} alt="love" /></Btndeal>
                                        <Btndeal onClick={addCart}>Add to cart</Btndeal>
                                    </Buttondeal>
                                </Cardcontent>
                            </Card>
                        </Cards>
                    </Section3>
                    <Section4>
                        <Travel>
                            <Travelcontent>
                                <Contents>Recent News</Contents>
                                <Partline></Partline>
                            </Travelcontent>
                            <Eyecontext>Where To Travel</Eyecontext>
                            <WatchText>Matoa Where To Travel? Yogyakarta</WatchText>
                            <Buttondis >Discover</Buttondis>
                        </Travel>
                        <Travelimg>
                            <Handimg src={hand} alt="hand" />
                        </Travelimg>
                    </Section4>
                    <Section5>
                        <Series>
                            <Contents>Maple Series</Contents>
                            <Partline></Partline>
                            <Seriesdiv>
                                <Seriesdiv1>
                                    <Imgdiv onClick={addProduct} >
                                        <Watchseries src={watch6} alt="watch" />
                                    </Imgdiv>
                                    <Imgcontent>
                                        <WatchText1>Way Kambas Maple</WatchText1>
                                        <EyeTexts>Rp 1.024.000</EyeTexts>
                                    </Imgcontent>
                                </Seriesdiv1>
                                <Seriesdiv1>
                                    <Imgdiv onClick={addProduct}>
                                        <Watchseries src={watch6} alt="watch" />
                                    </Imgdiv>
                                    <Imgcontent>
                                        <WatchText1>Kaili</WatchText1>
                                        <EyeTexts>Rp 950.000</EyeTexts>
                                    </Imgcontent>
                                </Seriesdiv1>
                                <Seriesdiv1>
                                    <Imgdiv onClick={addProduct}>
                                        <Watchseries src={watch6} alt="watch" />
                                    </Imgdiv>
                                    <Imgcontent>
                                        <WatchText1>Sunda</WatchText1>
                                        <EyeTexts>Rp 1.170.000</EyeTexts>
                                    </Imgcontent>
                                </Seriesdiv1>
                            </Seriesdiv>
                        </Series>
                        <Series>
                            <Contents>Ebony Series</Contents>
                            <Partline></Partline>
                            <Seriesdiv>
                                <Seriesdiv1>
                                    <Imgdiv onClick={addProduct}>
                                        <Watchseries src={watch7} alt="watch" />
                                    </Imgdiv>
                                    <Imgcontent>
                                        <WatchText1>Tomia Ebony</WatchText1>
                                        <EyeTexts>Rp 960.000</EyeTexts>
                                    </Imgcontent>
                                </Seriesdiv1>
                                <Seriesdiv1>
                                    <Imgdiv onClick={addProduct}>
                                        <Watchseries src={watch7} alt="watch" />
                                    </Imgdiv>
                                    <Imgcontent>
                                        <WatchText1>Mori</WatchText1>
                                        <EyeTexts>Rp 950.000</EyeTexts>
                                    </Imgcontent>
                                </Seriesdiv1>
                                <Seriesdiv1>
                                    <Imgdiv onClick={addProduct}>
                                        <Watchseries src={watch7} alt="watch" />
                                    </Imgdiv>
                                    <Imgcontent>
                                        <WatchText1>Alor</WatchText1>
                                        <EyeTexts>Rp 1.170.000</EyeTexts>
                                    </Imgcontent>
                                </Seriesdiv1>
                            </Seriesdiv>
                        </Series>
                        <Series>
                            <Contents>Featured</Contents>
                            <Partline></Partline>
                            <Seriesdiv>
                                <Seriesdiv1>
                                    <Imgdiv onClick={addProduct}>
                                        <Watchseries src={watch8} alt="watch" />
                                    </Imgdiv>
                                    <Imgcontent>
                                        <WatchText1>Sikka (Ebony & Maple)</WatchText1>
                                        <EyeTexts>Rp 1.198.000</EyeTexts>
                                    </Imgcontent>
                                </Seriesdiv1>
                                <Seriesdiv1>
                                    <Imgdiv onClick={addProduct}>
                                        <Watchseries src={watch9} alt="watch" />
                                    </Imgdiv>
                                    <Imgcontent>
                                        <WatchText1>Lore Walnut</WatchText1>
                                        <EyeTexts>Rp 1.280.000</EyeTexts>
                                    </Imgcontent>
                                </Seriesdiv1>
                                <Seriesdiv1>
                                    <Imgdiv onClick={addProduct}>
                                        <Watchseries src={watch10} alt="watch" />
                                    </Imgdiv>
                                    <Imgcontent>
                                        <WatchText1>Way Kambas Limited Edition</WatchText1>
                                        <EyeTexts>Rp 1.170.000</EyeTexts>
                                    </Imgcontent>
                                </Seriesdiv1>
                            </Seriesdiv>
                        </Series>
                    </Section5>
                    <Line>
                        <Line1> </Line1>
                        <Buttondisc >See More</Buttondisc>
                        <Line1> </Line1>
                    </Line>
                    <Section6>
                        <Glassimg>
                            <Girlimg src={glassgirl} alt="hand" />
                            <Arrow>
                                <Btnarrow><img src={Vector1} alt="leftarrow" /></Btnarrow>
                                <Btnarrow><img src={Vector2} alt="rightarrow" /></Btnarrow>
                            </Arrow>
                        </Glassimg>
                        <Glasscont>
                            <Contents>Testimonials</Contents>
                            <Partlines></Partlines>
                            <Contentglass>Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.</Contentglass>
                            <WatchText1>Gita Savitri</WatchText1>
                            <Eyecontext>Content Creator/Influencer</Eyecontext>
                        </Glasscont>
                    </Section6>
                    <Section7>
                        <Contents>Instagram</Contents>
                        <Partline></Partline>
                        <Instapic>
                            <img src={Rectangle1} alt="instapic" />
                            <img src={Rectangle2} alt="instapic" />
                            <img src={Rectangle3} alt="instapic" />
                            <img src={Rectangle4} alt="instapic" />
                            <img src={Rectangle5} alt="instapic" />
                        </Instapic>
                    </Section7>
                </Section>
            </Div>
            <Footer />
        </div>
    )
}

export default Home
