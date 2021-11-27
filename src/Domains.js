import react , { useState} from "react";
import {Tab, Tabs, TabList, TabPanel, } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';

import './App.scss';
                               

const Domains = (props) => {
    const { } = props;
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
            <div className='domain'>
                    <div className='first'>
                        <h1>Shembulli1</h1>
                        <h3 className='comi'>$5.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='second'>
                        <h1>.Shembulli2</h1>
                        <h3>$55.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='third'>
                        <h1>Shembulli3</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fourth'>
                        <h1>Shembulli4</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fifth'>
                        <h1>Shembulli5</h1>
                        <h3>$3.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='sixth'>
                        <h1>Shembulli6</h1>
                        <h3>$15.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='seventh'>
                        <h1>Shembulli7</h1>
                        <h3>$23.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='eighth'>
                        <h1>Shembulli8</h1>
                        <h3>$26.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </TabPanel>
            <TabPanel  hidden={index != 2}>
            <div className='domain'>
                    <div className='first'>
                        <h1>DedicatedServers</h1>
                        <h3 className='comi'>$5.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='second'>
                        <h1>DedicatedServers</h1>
                        <h3>$55.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='third'>
                        <h1>DedicatedServers</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fourth'>
                        <h1>DedicatedServers</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fifth'>
                        <h1>DedicatedServers</h1>
                        <h3>$3.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='sixth'>
                        <h1>DedicatedServers</h1>
                        <h3>$15.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='seventh'>
                        <h1>DedicatedServers</h1>
                        <h3>$23.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='eighth'>
                        <h1>DedicatedServers</h1>
                        <h3>$26.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </TabPanel>
            <TabPanel  hidden={index != 3}>
            <div className='domain'>
                    <div className='first'>
                        <h1>Virtual</h1>
                        <h3 className='comi'>$5.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='second'>
                        <h1>Virtual</h1>
                        <h3>$55.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='third'>
                        <h1>Virtual</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fourth'>
                        <h1>Virtual</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fifth'>
                        <h1>Virtual</h1>
                        <h3>$3.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='sixth'>
                        <h1>Virtual</h1>
                        <h3>$15.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='seventh'>
                        <h1>Virtual</h1>
                        <h3>$23.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='eighth'>
                        <h1>Virtual</h1>
                        <h3>$26.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </TabPanel>
            <TabPanel  hidden={index != 4}>
            <div className='domain'>
                    <div className='first'>
                        <h1>WordPress</h1>
                        <h3 className='comi'>$5.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='second'>
                        <h1>WordPress</h1>
                        <h3>$55.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='third'>
                        <h1>WordPress</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fourth'>
                        <h1>WordPress</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fifth'>
                        <h1>WordPress</h1>
                        <h3>$3.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='sixth'>
                        <h1>WordPress</h1>
                        <h3>$15.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='seventh'>
                        <h1>WordPress</h1>
                        <h3>$23.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='eighth'>
                        <h1>WordPress</h1>
                        <h3>$26.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </TabPanel>
            <TabPanel  hidden={index != 5}>
            <div className='domain'>
                    <div className='first'>
                        <h1>EmailHosting</h1>
                        <h3 className='comi'>$5.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='second'>
                        <h1>EmailHosting</h1>
                        <h3>$55.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='third'>
                        <h1>EmailHosting</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fourth'>
                        <h1>EmailHosting</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fifth'>
                        <h1>EmailHosting</h1>
                        <h3>$3.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='sixth'>
                        <h1>EmailHosting</h1>
                        <h3>$15.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='seventh'>
                        <h1>EmailHosting</h1>
                        <h3>$23.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='eighth'>
                        <h1>EmailHosting</h1>
                        <h3>$26.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </TabPanel>
            <TabPanel  hidden={index != 6}>
            <div className='domain'>
                    <div className='first'>
                        <h1>VPS</h1>
                        <h3 className='comi'>$5.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='second'>
                        <h1>VPS</h1>
                        <h3>$55.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='third'>
                        <h1>VPS</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fourth'>
                        <h1>VPS</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fifth'>
                        <h1>VPS</h1>
                        <h3>$3.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='sixth'>
                        <h1>VPS</h1>
                        <h3>$15.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='seventh'>
                        <h1>VPS</h1>
                        <h3>$23.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='eighth'>
                        <h1>VPS</h1>
                        <h3>$26.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            </TabPanel>
            <TabPanel  hidden={index != 7}>
            <div className='domain'>
                    <div className='first'>
                        <h1>FreeHosting</h1>
                        <h3 className='comi'>$5.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='second'>
                        <h1>FreeHosting</h1>
                        <h3>$55.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='third'>
                        <h1>FreeHosting</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fourth'>
                        <h1>FreeHosting</h1>
                        <h3>$7.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='fifth'>
                        <h1>FreeHosting</h1>
                        <h3>$3.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='sixth'>
                        <h1>FreeHosting</h1>
                        <h3>$15.99/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='seventh'>
                        <h1>FreeHosting</h1>
                        <h3>$23.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button>Buy Now</button>
                    </div>
                    <div className='eighth'>
                        <h1>FreeHosting</h1>
                        <h3>$26.33/yr</h3>
                        <p>Instead of $10.99/yr</p>
                        <button >Buy Now</button>
                    </div>
                </div>
            </TabPanel>
            
            </Tabs>
            











       
    );


};


export default Domains;