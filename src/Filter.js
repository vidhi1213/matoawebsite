import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useHistory } from 'react-router';
import { Div, Cardfilter, Filterbox, Cardbox, Buttondeal, Btndeal } from './Styles'
import {
    Section3, Sec3Div1, Sec3Para1, Line1, Sec3Para2, Sec3Para3,
    Sec3Para4, Sec3Div, Img26, Marg, Marg1, Sec3Para1New, Sec3Flex, Sec3Para2New,
} from './Style'
import img26 from './Images/image 9.png'
import img27 from './Images/image 41.png'
import img28 from './Images/image 42.png'
import love from './Images/love.png'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

const Filter = () => {
    const history = useHistory();
    const [cval, setCval] = useState({
        arr: []
    })
    const [range, setRange] = useState({
        value: { min: 500, max: 3000 }
    })
    const addCart = () => {
        history.push('/cart');
    }
    function handleWatchChange(e) {
        console.log('checked = ', e.target.value);
        const arr = cval.arr;
        let index;
        if (e.target.checked) {
            arr.push(e.target.value)
        } else {
            index = arr.indexOf(e.target.value)
            arr.splice(index, 1)
        }
        setCval({ arr: arr })
        console.log(arr);
    }

    return (
        <Div>
            <Header />
            <Cardfilter>
                <Filterbox>
                    <Sec3Div>Filter</Sec3Div>
                    <p style={{ margin: '25px 0px' }}><b>Price</b></p>
                    <InputRange
                        maxValue={5000}
                        minValue={0}
                        value={range.value}
                        onChange={value => setRange({ value })} />

                    <div className='checkStyle' style={{ margin: '50px 0px 30px 0' }}>
                        <label><b>Brand</b></label>
                        <div>
                            <input
                                onChange={handleWatchChange}
                                type="checkbox"
                                name="watch"
                                value="Rado"
                            />Rado
                        </div>
                        <div>
                            <input
                                onChange={handleWatchChange}
                                type="checkbox"
                                name="watch"
                                value="titan"
                            />titan
                        </div>
                        <div>
                            <input
                                onChange={handleWatchChange}
                                type="checkbox"
                                name="watch"
                                value="Rolex"
                            />Rolex
                        </div>
                    </div>
                    <div className='checkStyle' >
                        <label><b>other</b></label>
                        <div>
                            <input
                                onChange={handleWatchChange}
                                type="checkbox"
                                name="watch"
                                value="Price"
                            />Price
                        </div>
                        <div>
                            <input
                                onChange={handleWatchChange}
                                type="checkbox"
                                name="watch"
                                value="Name"
                            />Name
                        </div>
                        <div>
                            <input
                                onChange={handleWatchChange}
                                type="checkbox"
                                name="watch"
                                value="Discount"
                            />Discount
                        </div>
                    </div>
                </Filterbox>
                <Cardbox>
                    <Section3>
                        <Sec3Flex>
                            <Sec3Div1>
                                <Sec3Para1>20% OFF</Sec3Para1>
                                <Marg>
                                    <Img26 src={img26} alt='image' onClick={() => history.push('/product')}></Img26>
                                    <Marg1 onClick={() => history.push('/product')}>
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
                                    <Img26 src={img27} alt='image' onClick={() => history.push('/product')}></Img26>
                                    <Marg1 onClick={() => history.push('/product')}>
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
                                    <Img26 src={img28} alt='image' onClick={() => history.push('/product')}></Img26>
                                    <Marg1 onClick={() => history.push('/product')}>
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
                                    <Img26 src={img26} alt='image' onClick={() => history.push('/product')}></Img26>
                                    <Marg1 onClick={() => history.push('/product')}>
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

                    <Section3>
                        <Sec3Flex>
                            <Sec3Div1>
                                <Sec3Para1>20% OFF</Sec3Para1>
                                <Marg>
                                    <Img26 src={img26} alt='image' onClick={() => history.push('/product')}></Img26>
                                    <Marg1 onClick={() => history.push('/product')}>
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
                                    <Img26 src={img27} alt='image' onClick={() => history.push('/product')}></Img26>
                                    <Marg1 onClick={() => history.push('/product')}>
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
                                    <Img26 src={img28} alt='image' onClick={() => history.push('/product')}></Img26>
                                    <Marg1 onClick={() => history.push('/product')}>
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
                                    <Img26 src={img26} alt='image' onClick={() => history.push('/product')}></Img26>
                                    <Marg1 onClick={() => history.push('/product')}>
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

                    <Section3>
                        <Sec3Flex>
                            <Sec3Div1>
                                <Sec3Para1>20% OFF</Sec3Para1>
                                <Marg>
                                    <Img26 src={img26} alt='image' onClick={() => history.push('/product')}></Img26>
                                    <Marg1 onClick={() => history.push('/product')}>
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
                                    <Img26 src={img27} alt='image' onClick={() => history.push('/product')}></Img26>
                                    <Marg1 onClick={() => history.push('/product')}>
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
                                    <Img26 src={img28} alt='image' onClick={() => history.push('/product')}></Img26>
                                    <Marg1 onClick={() => history.push('/product')}>
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
                                    <Img26 src={img26} alt='image' onClick={() => history.push('/product')}></Img26>
                                    <Marg1 onClick={() => history.push('/product')}>
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
                </Cardbox>
            </Cardfilter>
            <Footer />
        </Div >
    )
}

export default Filter
