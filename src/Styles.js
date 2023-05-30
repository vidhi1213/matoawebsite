import { MultiStepForm } from 'react-multi-form';
import styled from 'styled-components'
export const Div = styled.div`
background: #F7F6F4;
max-width: 1440px;
margin:0 auto;
`;
export const Main = styled.div`
max-width: 1110px;
margin:0 auto;
`;
export const Head = styled(Main)`
padding:42px 0;
display:flex;
justify-content:space-between;
margin:0 0 112px 0;
`;
export const Logo = styled.div`
max-width: 178px;
height: 22px;
margin-top:5px;
`;
export const Nav = styled.div`
width: 445px;
height: 34px;
left: 498px;
top: 36px;
display:flex;
justify-content:space-between;
`;
export const Content = styled.div`
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 25px;
letter-spacing: 0.02em;
color: #333333;
`;
export const Shape = styled.div`
width: 200px;
display:flex;
justify-content:space-between;
`;
export const Text = styled.div`
display:flex;
`;
export const Img = styled.img`
background: #F1DDC9;
border-radius:90%;
padding:5px 5px;
`;
export const Image = styled.img`
height: 25px;
`;
export const Section = styled.div`
   
`;
export const Section1 = styled(Main)`
background: #F1DDC9;
height: 505px;
position:relative;
`;

export const Imagepart = styled.div`
display:flex;
`;
export const Image1 = styled.img`
// margin-top:110px;
position: absolute;
width: 325px;
height: 467px;
left: 8px;
top: 110px;
background:transparent;
`;
export const Part = styled.div`
display:flex;
flex-direction:column;
margin-left:380px;
`;
export const Parttext = styled.div`
margin-top:56px;
width: 413px;
height: 160px;
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 60px;
line-height: 80px;
letter-spacing: 0.02em;
color: #333333;
`;
export const Partline = styled.div`
width: 95px;
height: 0px;
border: 1px solid #000000;
margin-bottom:15px;
`;
export const Content1 = styled(Content)`
font-size: 16px;
width: 529px;
height: 66px;
margin-bottom:15px;
`;
export const Content2 = styled(Content)`
font-size: 16px;
font-weight: 600;
letter-spacing: 0.03em;
line-height: 27px;
`;
export const Partline1 = styled(Partline)`
width:66px;
`;
export const Buttons = styled.div`
display:flex;
margin-top:30px;
`;
export const Imgbtn = styled.div`
display:flex;
justify-content:space-around;
`;
export const Button = styled.button`
background: ${props => props.primary ? "#F1DDC9;" : "#D84727"};
  color: ${props => props.primary ? "#D84727" : "#FFFFFF"};
  width: ${props => props.primary ? '140px' : '208px'};
  border: 2px solid #D84727;
  font-family: Taviraj;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.02em;
  height: 62px;
  margin-right:16px;
  display:flex;
  justify-content:center;
  align-items:center;
`;
export const Btns = styled.div`
  margin-right:16px;
`;
export const Btn = styled.button`
position: absolute;
width: 60px;
height: 60px;
right: 108px;
top: 474px;
background:transparent;
border: 2px solid #D84727;
`;
export const Btn1 = styled.button`
position: absolute;
width: 60px;
height: 60px;
right: 29px;
top: 474px;
background:#D84727;
border: 2px solid #D84727;
`;
export const Section2 = styled(Main)`
margin-top:200px;
`;

export const Section2Part = styled.div`
display:flex;
justify-content:space-between;
// margin-bottom:100px;
`;
export const Eyewear = styled.div`
background: #FFFFFF;
width: 540px;
height: 270px;
position:relative;
`;

export const Eyearea = styled(Part)`
margin-left:5px;
width:300px;
padding:32px 0 0 32px;
`;
export const Span = styled.span`
font-weight: 600;
`;
export const EyeText = styled.div`
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 28px;
line-height: 32px;
letter-spacing: 0.03em;
color: #333333;
margin-bottom:6px;
`;
export const Eyecontext = styled.div`
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.03em;
color: #777777;
margin-bottom:6px;
`;
export const Glasses = styled.img`
position: absolute;
width: 330px;
height: 143px;
left: 200px;
top: 120px;
// left: 600px;
// top: 940px;
background:transparent;
`;
export const Watch = styled.img`
position: absolute;
left: 360px;
top: 110px;
background:transparent;
`;
export const Section3 = styled(Main)`
margin-top:100px;
`;
export const Contents = styled(Content2)`
font-size: 36px;
line-height: 40px;
font-weight: 500;
letter-spacing: 0.02em;
margin-bottom:10px;
`;

export const Cards = styled.div`
margin-top:108px;
display:flex;
justify-content:space-between;
`;
export const Buttondeal = styled.div`
// display:flex;
display:none;
margin-top:15px;
justify-content:space-between;
width:205px;
`;
export const Card = styled.div`
position:relative;
background: #FFFFFF;
width: 255px;
height: 440px;
&:hover ${Buttondeal}{
  display:flex;
}
`;
export const Card1 = styled(Card)`
position:relative;
background: #FFFFFF;
width: 255px;
height: 412px;
`;
export const Watch2 = styled.img`
position: absolute;
width: 221px;
height: 221px;
left: 20px;
top: -40px;
background:transparent;
`;

export const WatchText = styled(Contents)`
font-size: 24px;
line-height: 32px;
`;
export const Watchcontext = styled(Eyecontext)`
text-decoration: line-through;
text-decoration-color: red;
`;
export const Cardcontent = styled(Eyecontext)`
padding:210px 0 0 20px;
`;

export const Btndeal = styled.button`
background: ${props => props.primary ? "#FFFFFF" : "#D84727"};
  color: ${props => props.primary ? "" : "#FFFFFF"};
  width: ${props => props.primary ? '39px' : '158px'};
  border: 2px solid #D84727;
  font-family: Taviraj;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.02em;
  height: 39px;
  display:flex;
  justify-content:center;
  align-items:center;
  // margin-right:16px;
`;
export const Section4 = styled.div`
display:flex;
justify-content:space-between;
width:1275px;
margin:141px 0 105px 165px;
`;
export const Buttondis = styled(Button)`
background:  white ;
color:#D84727;
width: 160px;
height: 58px;
margin:45px 0 0 0;
`;
export const Travel = styled.div`
width: 350px;
height: 626px;
`;
export const Travelcontent = styled.div`
margin:0 0 188px 0;
`;
export const Travelimg = styled.div`
position:relative;
width: 640px;
height: 458px;
background: #F1DDC9;
`;
export const Handimg = styled.img`
position:absolute;
width: 627.54px;
height: 460px;
right: 242.48px;
top: 80px;
`;
export const Section5 = styled(Main)`
display:flex;
justify-content:space-between;
`;
export const Series = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
`;
export const Seriesdiv = styled.div`
margin-top:52px;
height:460px;
display:flex;
flex-direction:column;
justify-content:space-between;
`;
export const Seriesdiv1 = styled.div`
width:345px;
display:flex;
justify-content:space-between;
`;
export const Imgdiv = styled.div`
width: 131px;
height: 131px;
display:flex;
justify-content:center;
align-items:center;
background: #F1DDC9;
`;
export const Watchseries = styled.img`
width: 68.07px;
height: 100px;
`;
export const WatchText1 = styled.div`
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 32px;
letter-spacing: 0.02em;
color: #333333;
`;
export const Imgcontent = styled.div`
width:190px;
`;
export const EyeTexts = styled(EyeText)`
font-weight: 500;
line-height: 40px;
letter-spacing: 0.02em;
`;
export const Line = styled.div`
display:flex;
justify-content:space-between;
margin:85px 165px 156px 165px;
`;
export const Line1 = styled.div`
width: 391px;
height: 0px;
border: 0.3px solid #999999;
`;
export const Buttondisc = styled(Buttondis)`
margin:-27px 0 0 0;
width: 272px;
border: 1px solid #D84727;
`;
export const Section6 = styled.div`
width: 1275px;
height:500px;
display:flex;
justify-content:space-between;
`;
export const Glassimg = styled.div`
position:relative;
width: 515px;
height: 300px;
background: #F1DDC9;

`;
export const Girlimg = styled.img`
position:absolute;
width: 511px;
height: 317px;
left: 170px;
top: 80px;
margin:0 0 100px 0;
`;
export const Glasscont = styled.div`
width: 511px;
display:flex;
flex-direction:column;
`;
export const Contentglass = styled(Content1)`
width: 511px;
height: 130px;
font-size: 16px;
line-height: 28px;
// padding:0 20px 5px 0;
`;
export const Partlines = styled(Partline)`
margin:0 0 60px 0;
`;
export const Arrow = styled.div`
display:flex;
width:130px;
display:flex;
align-items:center;
justify-content:space-between;
margin:430px 0 0 165px;
`;
export const Btnarrow = styled.button`
display:flex;
background: #F7F6F4;
border:none;
`;

export const Section7 = styled(Main)`
margin-top:65px;
height:377px;
`;
export const Instapic = styled.div`
margin:38px 0 0 0;
display:flex;
background: #F7F6F4;
`;





// MultiStepForm

export const Container = styled(Main)`
background: #F7F6F4;
margin-bottom:160px;
`;

export const Multi = styled.div`
margin:65px 196px 0 196px;
width:718px;
`;
export const Detail = styled(Main)`
display:flex;
justify-content:space-between;
align-item:center;
margin-top:58px;
width:1110px;
`;

export const Detailorder = styled.div`
background: white;
max-height: 508px;
max-width: 540px;
`;

export const Ordertext = styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
width:388px;
height:240px;
`;

export const Otext = styled.p`
font-family: Taviraj;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 30px;
letter-spacing: 0.03em;
color: #333333;
margin:0;
height:60px;
`;
export const Otextnew = styled(Otext)`
font-size: 36px;
`;
export const Dline = styled.div`
width: 476px;
border: 1px solid #333333;
margin:24px 0 24px 32px;
`;
export const Dorder = styled.div`
display:flex;
justify-content:space-between;
margin:32px 0 0 32px;
`;
export const Dordernew = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:469px;
max-height: 170px;
margin:39px 0 0 32px;
`;
export const Dtext = styled.div`
font-family: Taviraj;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 48px;
letter-spacing: 0.02em;
color: #333333;
margin:32px 0 40px 32px;
`;

export const Bill = styled.div`
background: white;
max-width: 540px;
max-height: 883px;
padding:32px 32px 51px 32px;
`;
export const Dtextnew = styled(Dtext)`
margin:0 0 40px 0;
`;
export const Pdetail = styled.div`

`;
export const Name = styled(Dtext)`
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 32px;
letter-spacing: 0.03em;
color: #000000;
margin:0 0 4px 0;
width: 136px;
height: 32px;
`;
export const Input = styled.input`
border: none;
border-bottom: 0.3px solid #333333;
width: 476px;
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 24px;
letter-spacing: 0.03em;
outline:none;
color: #999999;
margin:0 0 24px 0;
`;
export const Select = styled.select`
border: none;
border-bottom: 0.3px solid #333333;
width: 476px;
resize: vertical;
margin:0 0 24px 0;
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 24px;
letter-spacing: 0.03em;
outline:none;
color: #333333;
    option{
      font-family: Taviraj;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.03em;
      color: #333333;
      outline:none;
    }
`;

export const Citycode = styled.div`
width: 476px;
display:flex;
justify-content:space-between;
align-items:center;
`;
export const City = styled.div`
width: 238px;
`;
export const Code = styled.div`
width: 214px;
`;
export const Selects = styled(Select)`
width: 238px;
`;
export const Inputs = styled(Input)`
width: 500px;
`;
export const Btngroup = styled.div`
display:flex;
justify-content:space-between;
float:right;
width:540px;
margin:40px 0 0 0;
`;
export const Buttong = styled.button`
background: ${props => props.primary ? "#FFFFFF" : "#D84727"};
  color: ${props => props.primary ? "#D84727" : "#FFFFFF"};
  width:250px;
  border: 2px solid #D84727;
  font-family: Taviraj;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 34px;
  letter-spacing: 0.02em;
  height: 61px;
  display:flex;
  justify-content:center;
  align-items:center;
`;




export const Trackpage = styled(Main)`
background: #F7F6F4;
width:1110px;
display:flex;
justify-content:space-between;
margin-bottom:86px;
`;
export const Track = styled.div`
max-width:540px;
max-height:607px;
background: white;
padding:66px 86px 42px 87px;
`;
export const Page = styled.div`
max-width:540px;
max-height:607px;
padding:32px 39px 28px 32px;
background: white;
`;
export const Ttext = styled.p`
font-family: Taviraj;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 32px;
letter-spacing: 0.02em;
font-weight: 500;
text-align:center;
margin:40px 0 16px 0;
`;

export const TName = styled.div`
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 32px;
letter-spacing: 0.03em;
color: #000000;
text-align:center;
width:367px;
height:48px;
margin:0 0 60px 0;
`;
export const Btntrack = styled(Buttong)`
width:367px;
height: 68px;
`;
export const Pic = styled.div`
display:flex;
justify-content:space-between;
width:327px;
margin:0 0 32px 0;
`;
export const Picdiv = styled.div`
display:flex;
justify-content:space-between;
width:150px;
align-items:center;

`;
export const Pictext = styled(TName)`
font-family: Nunito;
color:#333333;
 margin:0;
 height:32px;
`;

export const Pimg = styled.img`
width:17px;
height:17px;
`;
export const Pimgs = styled.img`
width:24px;
height:24px;
`;

export const Pagetext = styled.div`
width: 237px;
height: 130px;
margin:0 0 13px 0;
`;
export const Textpage = styled.div`
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 32px;
letter-spacing: 0.02em;
color: #333333;
`;

export const Tpage = styled(Textpage)`
font-size: 16px;
color: #666666;
`;
export const Pageline = styled(Dline)`
font-size: 16px;
margin:0;
border: 1px solid #999999;
`;
export const Porder = styled.div`
width:388px;
display:flex;
justify-content:space-between;
margin:0 0 24px 0;
`;
export const Divtext = styled.div`
width: 170px;
height: 144px;
`;
export const Ptext = styled.div`
font-family: Taviraj;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 48px;
/* or 200% */
color: #333333;
letter-spacing: 0.03em;
`;
export const Pordernew = styled.div`
display:flex;
// justify-content:space-between;
align-items:center;
// width: 469px;
max-height: 60px;
margin:16px 0 16px 0;
`;
export const Deltext = styled.p`
font-family: Taviraj;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 60px;
margin:0 75px 0 0;
letter-spacing: 0.03em;
width: 144px;
height: 60px;
color: #333333;
`;
export const Deltextnew = styled(Deltext)`
font-size: 36px;
width: 237px;
height: 60px;
margin:0;
`;
export const Pend = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width: 469px;
max-height: 60px;
margin:16px 0 16px 0;
`;
export const Endtext = styled.div`
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 32px;
letter-spacing: 0.02em;
color: #333333;
width: 167px;
height: 32px;
`;
export const Endtextnew = styled(Endtext)`
width: 277px;
height: 64px;
`;




export const OrderMerge = styled.div`
max-width: 540px;
max-height: 714px;
 display:flex;
 flex-direction:column;
justify-content:space-between;
width: 540px;
height: 714px;
`;

export const PaymentDetail = styled.div`
max-width: 540px;
max-height: 176px;
padding:24px 32px;
background:white;
 display:flex;
 flex-direction:column;
justify-content:space-between;
`;
export const PaymentDiv = styled.div`
 display:flex;
justify-content:space-between;
`;


export const PayPara1 = styled.p`
width: 289px;
height: 48px;
font-family: Taviraj;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 48px;
letter-spacing: 0.02em;
color: #333333;
margin:0 0 16px 0;
`;

export const PayPara2 = styled.p`
width: 106px;
height: 48px;
font-family: Taviraj;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 48px;
letter-spacing: 0.02em;
color: #D93F3F;
margin:0;
`;

export const PaymentDiv1 = styled.div`
width: 476px;
height: 64px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 32px;
letter-spacing: 0.03em;
color: #333333;
`;

export const DetOrder = styled.div`
max-width: 540px;
max-height: 714px;
background:white;
padding:24px 32px 48px 32px;
`;

export const DetPara = styled.p`
width: 232px;
height: 48px;
font-family: Taviraj;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 48px;
letter-spacing: 0.02em;
color: #333333;
margin:0 0 40px 0;
`;
export const DetDiv = styled.div`
display:flex;
justify-content:space-between;
margin:0 0 24px 0;
`;
export const Detpara1 = styled.p`
width: 167px;
height: 32px;
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 32px;
letter-spacing: 0.02em;
color: #333333;
margin:0 32px 0 0;
`;
export const DetDiv1 = styled.div`
 display:flex;
 flex-direction:column;
justify-content:space-between;
`;
export const DetMerge = styled.div`
 display:flex;
 align-items:center;
justify-content:space-between;
`;
export const Detpara2 = styled.p`
width: 201px;
height: 32px;
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 32px;
letter-spacing: 0.02em;
color: #333333;
margin:0 0 8px 0;
`;
export const DetBtn = styled.button`
width: 48px;
height: 24px;
font-family: Taviraj;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.02em;
color: #D84727;
background:white;
border:none;
margin:0 0 8px 0;
`;
export const DetDiv2 = styled.div`
width: 278px;
height: 48px;
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.02em;
color: #777777;
`;

export const DetDiv3 = styled.div`
 display:flex;
justify-content:space-between;
margin:0 0 24px 0;
`;

export const Detpara1New = styled.div`
width:277px;
height: 32px;
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 32px;
letter-spacing: 0.02em;
color: #333333;
`;

export const Detpara1New1 = styled(Detpara1New)`
height: 130px;
`;

export const PayMethod = styled.div`
background:white;
max-width: 1110px;
max-height: 464px;
padding:24px 55px 32px 32px;
margin:30px 0 0 0;
`;

export const MPara = styled.p`
width: 321px;
height: 48px;
font-family: Taviraj;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 48px;
letter-spacing: 0.02em;
color: #333333;
`;

export const MDiv = styled.div`
 display:flex;
 justify-content:space-between;
 width:1010px;
`;

export const MDiv2 = styled.div`
 display:flex;
 justify-content:space-between;
 width:989px;
`;

export const LabelMerge = styled.div`
display:flex;
flex-direction:column;
 justify-content:space-between;
`;
export const PayImgMerge = styled.div`
display:flex;
 justify-content:space-between;
width:222px;
`;

export const Label = styled.div`
width: 143px;
height: 32px;
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 32px;
letter-spacing: 0.02em;
color: #333333;

`;
export const Label1 = styled(Label)`
width: 183px;
`;

export const MDivMerge = styled.div`
width: 183px;
display:flex;
 justify-content:space-between;
`;

export const MDivMerge3 = styled.div`
width: 262px;
display:flex;
 justify-content:space-between;
`;
export const MDivMerge1 = styled(MDivMerge)`
width: 223px;
`;

export const Label2 = styled(Label)`
width: 594px;
`;

export const PayImgMerge1 = styled.div`
width:366px;
display:flex;
 justify-content:space-between;
`;
export const MDivMerge2 = styled(MDivMerge)`
width:634px;
`;

export const Method = styled.div`
height:320px;
display:flex;
flex-direction:column;
 justify-content:space-between;
`;

export const MultiPara = styled.div`
margin-top:75px;
`;

export const Loginbtn = styled.button`
border:none;
background:#F7F6F4;
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 25px;
letter-spacing: 0.02em;
color: #333333;
`;
export const Logindetail = styled.div`
margin:0 auto;
width:500px;
height:350px;
background:#F7F6F4;
padding:32px;
border:1px solid lightgray;
`;
export const Groupbtn = styled.div`
display:flex;
float:right;
width:320px;
justify-content:space-between;
height:100px;
align-items:center;
`;
export const Btnlogin = styled.button`
width: 150px;
height: 60px;
background:#D84727;
color:#FFFFFF;
border: 2px solid #D84727;
font-family: Taviraj;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 100% */

letter-spacing: 0.02em;
`;
export const Cancelbtn = styled.button`
color:#D84727;
width: 150px;
height: 60px;
background:#FFFFFF;
border: 2px solid #D84727;
font-family: Taviraj;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 100% */
letter-spacing: 0.02em;
`;
export const Loginform = styled.h1`
text-align:center;
`;

export const Shape1 = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;
export const Profile = styled.div`
position:absolute;
top:80px;
right:360px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
`;
export const ProfileLink = styled.div`
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 34px;
letter-spacing: 0.02em;
color: #333333;
padding:5px 25px;
border-bottom:1px solid lightgray;
&:hover{
padding:10px 35px;
color:#D84727;
}
`;

export const MBtn = styled.div`
font-size:30px;
`;

export const MMerge = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin:0 0 30px 0;
`;
export const Imageuser = styled.img`
margin:0 auto;
height:120px;
width:120px;
`;

export const MMerge2 = styled(WatchText1)`
display:flex;
align-items:center;
justify-content:space-between;
font-size: 20px;
`;
export const MMerge3 = styled(WatchText1)`
display:flex;
justify-content:space-between;
font-size: 20px;
`;
export const Background = styled.div`
margin:0 auto;
max-width: 1440px;
height: 650px;
background:#F7F6F4;
padding:105px 0;
`;

export const SDiv = styled.div`
position:absolute;
right:650px;
top:35px;
`;

export const Cardfilter = styled.div`
display:flex;
justify-content:space-around;
margin:0 0 100px 0;
height:1570px;
`;
export const Filterbox = styled.div`
padding:10px;
width:280px;
background:rgba(0, 0, 0,0.1);
`;

export const Cardbox = styled.div`
padding:10px;
width:1110px;
background:rgba(0, 0, 0,0.1);
`;

export const Btnlogins = styled(Btnlogin)`
height:40px;
margin:0 0 15px 0;
`;
export const Continue = styled(WatchText1)`
text-align:center;
color:#D84727;
margin:0 0 20px 0;
`;

export const Input1 = styled(Input)`
width:214px;
`;

export const Inp = styled(Input)`
margin:0 0 10px 0;
`;
export const Inp1 = styled(Input1)`
margin:0 0 10px 0;
`;
export const Select1 = styled(Select)`
margin:0 0 10px 0;
`;
export const Selects1 = styled(Selects)`
margin:0 0 10px 0;
`;
export const Continue1 = styled(Continue)`
margin:0 0 5px 0;
`;
export const Groupbtns = styled(Groupbtn)`
margin:350px 0 0 0;
float:left;
`;
export const VFlex = styled.div`
display:flex;
justify-content:space-between;
width:475px;
`;
export const VBtn = styled.button`
background:#D84727;
border: 2px solid #D84727;
color:white;
width:100px;
justify-content:center;
display:flex;
align-items:center;
`;
export const AddVar = styled.div`
  border:1px solid gray;
  border-radius:10px;
  background:gray;
  width:250px;
  padding:10px 10px 10px 40px; 
  margin:0 0 20px 0;
`;

export const InputArea = styled.textarea`
border: none;
border-bottom: 0.3px solid #333333;
width: 476px;
font-family: Taviraj;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 24px;
letter-spacing: 0.03em;
outline:none;
color: #999999;
margin:0 0 24px 0;
`;