import react , { useState} from "react";
import {Tab, Tabs, TabList, TabPanel, } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';

import './App.scss';
                               

const Domains = (props) => {
    const { Title, Price, Description, Buynowbtn} = props;
    const [index,setIndex]=useState(0);
    return (
        <Tabs > 
            <TabList  className='Titles'>
                <Tab onClick={()=>{setIndex(0)}}>
                    Domains
                    </Tab>
                <Tab  onClick={()=>{setIndex(1)}}>
                    Web Hosting
                </Tab>
                <Tab  onClick={()=>{setIndex(2)}}>
                    Dedicated Servers
                </Tab>
                <Tab  onClick={()=>{setIndex(3)}}>
                    Virtual Cloud Servers
                </Tab>
                <Tab  onClick={()=>{setIndex(4)}}>
                    WordPress Hosting
                </Tab>
                <Tab  onClick={()=>{setIndex(5)}}>
                    Email Hosting
                </Tab>
                <Tab  onClick={()=>{setIndex(6)}}>
                    VPS Hosting Servers
                </Tab>
                <Tab  onClick={()=>{setIndex(7)}}>
                    Free Hosting
                </Tab>
                </TabList>
            
                <TabPanel   hidden={index != 0}>
                <div className='domain'>
                    <div className='first'>
                        <h1>.COM</h1>
                        <h3 className='comi'>$5.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='second'>
                        <h1>.AL</h1>
                        <h3>$55.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='third'>
                        <h1>.NET</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fourth'>
                        <h1>.HEALTH</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fifth'>
                        <h1>.COUK</h1>
                        <h3>$3.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='sixth'>
                        <h1>.ORG</h1>
                        <h3>$15.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='seventh'>
                        <h1>.CO</h1>
                        <h3>$23.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='eighth'>
                        <h1>.SEA</h1>
                        <h3>$26.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </TabPanel>
            <TabPanel  hidden={index != 1}>
                <h1>{Title}</h1>
                <h3>{Price}</h3>
                <p>{Description}</p>
                <button>{Buynowbtn}</button>
            </TabPanel>
            <TabPanel  hidden={index != 2}>
                <h1>{Title}</h1>
                <h3>{Price}</h3>
                <p>{Description}</p>
                <button>{Buynowbtn}</button>
            </TabPanel>
            <TabPanel  hidden={index != 3}>
                <h1>{Title}</h1>
                <h3>{Price}</h3>
                <p>{Description}</p>
                <button>{Buynowbtn}</button>
            </TabPanel>
            <TabPanel  hidden={index != 4}>
                <h1>{Title}</h1>
                <h3>{Price}</h3>
                <p>{Description}</p>
                <button>{Buynowbtn}</button>
            </TabPanel>
            <TabPanel  hidden={index != 5}>
                <h1>{Title}</h1>
                <h3>{Price}</h3>
                <p>{Description}</p>
                <button>{Buynowbtn}</button>
            </TabPanel>
            <TabPanel  hidden={index != 6}>
                <h1>{Title}</h1>
                <h3>{Price}</h3>
                <p>{Description}</p>
                <button>{Buynowbtn}</button>
            </TabPanel>
            <TabPanel  hidden={index != 7}>
                <h1>{Title}</h1>
                <h3>{Price}</h3>
                <p>{Description}</p>
                <button>{Buynowbtn}</button>
            </TabPanel>
            
            </Tabs>
            











       
    );


};


export default Domains;