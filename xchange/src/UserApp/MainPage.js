import React, { useState, useRef, useContext, useEffect } from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import './MainPage.css'
import CurrencyCard from './UserAppComponents/CurrencyCard'
import UserNav from './UserAppComponents/UserNav'
import { userWalletData } from '../Data/UserWalletData'
import Footer from '../Components/Footer';
import { MainContext } from '../Hooks/Context';
import Converter from '../Components/Converter';


function MainPage() {
    const currency = [{ name: "USD", value: 650 }, { name: "EUR", value: 450 }, { name: "XAF", value: 1 }]
    const [username, setUserName] = useContext(MainContext);
    const [balance, setBalance] = useState(0)
    const calcTotalBalance = (data, balance) => {
        balance = 0;
        for (let i = 0; i < data.length; i++) {
            balance = balance + ((data[i].balance) * data[i].value);
        }
        console.log(balance.toString())
        return balance.toString()
    }
    const [openConverter, setOpenConverter] = useState('none');
    
    const closerFunction = () => {
        setOpenConverter('none');
    }
    
    const conv = {
        display: openConverter,
    }

    const openConverterWindow = () => {
        setOpenConverter('initial');
    }

   return (
    <>
   <div className='converterwrapper' style={conv}><Converter closer={()=>{closerFunction()}}/></div>
        <div id='mainmain'>
            <div id='main'>
                <div className='nav'><UserNav username={username}/></div>
                <div className='apparea'>
                    <div className='topsection' id='home'>
                    <AnimatedOnScroll animationIn="bounceIn" animationOut="slideInLeft"> <h1 className='totalbalance'>TOTAL BALANCE: { calcTotalBalance(userWalletData, balance) } {currency[2].name}</h1></AnimatedOnScroll>
                        <button className='deposit-button'>DEPOSIT</button>
                    </div>
                    <section id='walletsection'>
                        <h1 className='header'>MY CURRENCIES</h1>
                        <br />
                        <div className='wallets'>
                            {userWalletData.map((item, index) => {
                                return <>
                                    <CurrencyCard name={item.name}
                                        background={item.background}
                                        logo={item.logo}
                                        sign={item.sign}
                                        balance={item.balance}
                                        onClick={()=>{openConverterWindow()}}
                                        
                                    />
                                </>
                            })
                            }
                        </div>
                        <section className='addcurrenciessection'>
                            <span className='addc'>ADD CURRENCY</span><div>
                                <select>
                                    <option>NGN</option>
                                    <option>IRR</option>
                                    <option>INR</option>
                                    <option>IBS</option>
                                    <option>ISD</option>
                                </select>
                            </div>
                        </section>
                    </section>
                </div>
                <section id="market">
                <AnimatedOnScroll animationIn="slideInRight" animationOut="slideInLeft">   <h1>TOP CURRENCIES IN THE MARKET</h1></AnimatedOnScroll>
                 <AnimatedOnScroll animationIn="bounceInLeft" animationOut="bounceInRight">
                 <div className='statsimage'>
                    <img src='https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/most_trader_currencies%20002%20002%20(002).png'/>
                 </div>
                 </AnimatedOnScroll>
                </section>
                <Footer />
            </div>
        </div>
        </>
    )
}

export default MainPage
