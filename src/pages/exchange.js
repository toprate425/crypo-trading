import React, { useState } from 'react';
import styled from 'styled-components';
import { Dropdown, Form, Tabs, Tab, OverlayTrigger, Tooltip  } from 'react-bootstrap';
import { Slider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'; 
import MarketPairs from '../components/MarketPairs';
import OrderBook from '../components/OrderBook';
import TradingChartDark from '../components/TradingChartDark';

const FavoriteWrapper = styled.div`
  z-index: 1;
  height: 43px;
  transform: translate(0px, 0px);
  margin: 1px;
`

const FavoriteContent = styled.div`
  box-sizing: border-box;
  margin: 0px 0px 4px;
  min-width: 0px;
  display: flex;
  padding-right: 16px;
  align-items: center;
  justify-content: left;
  background-color: rgb(18, 18, 33);
  height: 100%;
`

const FavoriteStar = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  color: rgb(88, 76, 234);
`

const DisplayValue = styled.div`
  color: rgb(255, 90, 181);
  margin: 0px 30px;
  font-size: 24px;
`

const TickerWrapper = styled.div`
  justify-content: flex-end;
  align-items: center;
  min-width: 18px;
  margin-right: 15px;
  display: flex;
  position: relative;
`


const TickerPopContent = styled.div`
  position: absolute;
  inset: 0px auto auto 0px;
  padding: 16px;
  background-color: rgb(30, 31, 49);
  box-shadow: rgb(0 0 0 / 8%) 0px 7px 14px, rgb(0 0 0 / 8%) 0px 3px 6px, rgb(90 92 116 / 90%) 0px 0px 1px inset;
  border-radius: 4px;
  z-index: 1000;
  color: rgb(178, 180, 198);
  font-size: 14px;
  top: 55px;
`

const TradeBox = styled.div`
  background: #1e1f31;
  height: calc(100% - 16px);
`

const CustomButton = styled.div`
  margin: 0px 5px 0px 0px;
  min-width: 0px;
  flex: 1 1 0%;
  font-size: 12px;
  line-height: 24px;
  color: rgb(240, 240, 245);
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  border-radius: 2px;
  background-color: rgb(59, 61, 89);
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 64px;
  height: 24px;
  padding: 0px 4px;
  display: inline-block;
  &:hover {
    background-color: rgb(45, 46, 63);
    border-color: rgb(45, 46, 63);
  }
`

const PriceWrapper = styled.div`
  margin: 10px 0px 0px;
  min-width: 0px;
  border-radius: 4px;
  font-size: 14px;
  background-color: rgb(44, 45, 67);
  border: none !important;
`

const PriceContent = styled.div`
  min-width: 0px;
  display: inline-flex;
  position: relative;
  -webkit-box-align: center;
  align-items: center;
  line-height: 1.6;
  border: 1px solid rgba(43, 47, 54, 0.8);
  border-radius: 4px;
  width: 100%;
  height: 40px;
  margin: 0px;
  &:hover {
    border-color: rgb(88, 76, 234);
  }
`

const InputPrefix = styled.div`
  flex-shrink: 0;
  margin-left: 8px;
  min-width: 48px;
  font-size: 14px;
  color: rgb(90, 92, 116);
  margin-right: 4px;
`

const Input = styled.input`
  color: rgb(240, 240, 245);
  font-size: 14px;
  padding-left: 4px;
  padding-right: 4px;
  text-align: right;
  margin: 0px;
  min-width: 0px;
  width: 100%;
  height: 100%;
  padding: 0px;
  outline: none;
  background-color: inherit;
  opacity: 1;
  border: none !important;
`

const InputSuffix = styled.div`
  flex-shrink: 0;
  margin-right: 8px;
  font-size: 14px;
  color: rgb(90, 92, 116);
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 4px;
`

const ConnectButton = styled.button`
  margin: 40px 0px 16px;
  appearance: none;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
  outline: none;
  padding: 10px 16px;
  min-width: 60px;
  word-break: keep-all;
  color: rgb(255, 255, 255);
  border-radius: 4px;
  min-height: 24px;
  border: none;
  font-size: 14px;
  line-height: 20px;
  background-image: linear-gradient(93.96deg, rgb(224, 95, 187) 0.76%, rgb(66, 80, 244) 100.57%);
  background-color: rgb(107, 120, 238);
  font-weight: 400;
  width: 100%;
`

const CommonWrapper = styled.div`
  z-index: auto;
  width: 100%;
  background-color: rgb(18, 18, 33);
  height: 50%;
  margin: 1px;
`

const DashboardMark = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`

const PointerMark = styled.div`
  transform: rotate(-45deg);
  position: absolute;
  left: 0px;
  top: 0px;
  transform-origin: center center;
  transition: transform 1s ease 0s;
  height: 24px;
  width: 24px;
`
const ProfitMark = styled.div`
  box-sizing: border-box;
  margin: 0px 0px 0px 10px;
  min-width: 0px;
  font-size: 18px;
  color: rgb(29, 177, 168);
`
const MarginRatio = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  position: relative;
  z-index: 1;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 14px;
  color: rgb(240, 240, 245);
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(18, 18, 33);
  flex-shrink: 0;
  -webkit-box-flex: 0;
  flex-grow: 0;
  user-select: auto;
`
const Label = styled.label`
  margin: 0px;
  min-width: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: help;
  color: rgb(114, 118, 143);
  &:hover {
    color: rgb(240, 240, 245);
    border-bottom-color: rgb(240, 240, 245);
  }
`
const AssetButtonContent = styled.div`
  min-width: 0px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
  margin: 0px 10px
`
const AssetsButton = styled.button`
  cursor: not-allowed;
  margin: 5px;
  box-shadow: none;
  color: rgb(90, 92, 116);
  background-color: rgb(45, 46, 63);
  appearance: none;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
  outline: none;
  padding: 4px 8px;
  min-width: 40px;
  word-break: keep-all;
  border-radius: 4px;
  min-height: 24px;
  border: none;
  font-size: 14px;
  line-height: 20px;
  flex: 1 1 0%;
  font-weight: 400;
`

const subMenuItems = [
  { id: 1, name: 'Mark', value: '0.9738', color: 'rgb(240, 240, 245)' },
  { id: 2, name: 'Index', value: '0.9742', color: 'rgb(240, 240, 245)' },
  { id: 3, name: 'Funding', value: '0.0100%', color: 'rgb(255, 211, 126)' },
  { id: 4, name: 'Countdown', value: '07:44:41', color: 'rgb(240, 240, 245)' },
  { id: 5, name: '24h Change', value: '0.0482 + 5.21%', color: 'rgb(43, 189, 181)' },
  { id: 6, name: '24h High', value: '0.9879', color: 'rgb(240, 240, 245)' },
  { id: 7, name: '24h Low', value: '0.8976', color: 'rgb(240, 240, 245)' },
  { id: 8, name: '24h Volume(ADA)', value: '7,142,430.00', color: 'rgb(240, 240, 245)' },
  { id: 9, name: '24h Volume(USDT)', value: '6,718,080.98', color: 'rgb(240, 240, 245)' },
]
function Exchange() {
  const [show, setShow] = useState(false);
  const [key, setKey] = useState('Limit');
  const [historyKey, setHistoryKey] = useState('positions')
  const [sizeValue, setSizeValue] = useState(50);
  const handlePopupTicker = () => {
      setShow(!show);
  }

  const iconWrapper = {
    color: 'rgb(114, 118, 143)', fontSize: 16, fill: 'rgb(114, 118, 143)', width: '1em', height: '1em', cursor: 'pointer'
  }

    return (
      <>
        <div className="container-fluid no-fluid" style={{ padding: 0, background: '#26283c' }}>
          <div style={{ display: 'flex'}}>
            <div style={{ flex: 0.6 }}>
              <FavoriteWrapper>
                <FavoriteContent>
                  <FavoriteStar>
                    <svg style={iconWrapper} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="css-1s6c8vs"><path d="M21.766 10.858c-1.2 1.462-3.245 3.61-3.847 4.237a.5.5 0 00-.135.422c.12.801.503 3.402.696 5.192.1 1.09-.685 1.561-1.576 1.136-1.525-.768-3.77-1.726-4.622-2.124a.543.543 0 00-.454-.002c-.862.392-3.132 1.332-4.674 2.097-.9.423-1.695-.049-1.594-1.136.195-1.773.641-4.338.786-5.151a.502.502 0 00-.14-.444c-.638-.639-2.76-2.785-3.97-4.239-.507-.625-.18-1.518.82-1.681 1.707-.323 4.203-.806 4.967-.954a.496.496 0 00.343-.252c.4-.736 1.783-3.276 2.712-4.93.85-1.68 1.404-1.027 1.95.003a523.652 523.652 0 012.68 4.936c.07.132.195.224.342.253.759.15 3.223.633 4.908.956.989.163 1.31 1.053.808 1.681z"></path></svg>
                  </FavoriteStar>
                </FavoriteContent>
              </FavoriteWrapper>
              <div style={{ background: '#121221', height: 76, display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Dropdown id="customDropdown">
                  <Dropdown.Toggle style={{ color: 'rgb(240, 240, 245)', textAlign: 'start', fontWeight: 'bold', marginTop: 12 }} variant="transparent" id="dropdown-button-dark-example1">
                    ADAUSDT <br/> <p style={{ fontSize: 14 }}>Perpetual</p>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ overflow: 'auto', border: 0, borderRadius: 4, backgroundColor: 'rgb(30, 31, 49)', padding: '0 0 8px', minWidth: 425, maxWidth: '100vw', height: 318, maxHeight: '100vh', boxShadow: 'rgb(20 21 26 / 10%) 0px 0px 1px, rgb(71 77 87 / 8%) 0px 7px 14px, rgb(20 21 26 / 8%) 0px 3px 6px'}}>
                    <MarketPairs />
                  </Dropdown.Menu>
                </Dropdown>
                  <DisplayValue>
                    0.9766
                  </DisplayValue>
                </div>
                <ul style={{ display: 'flex', alignItems: 'center' }}>
                  { 
                  subMenuItems.map(item => 
                    <li key={item.id}>
                      <p style={{ margin: '2px 5px', color: 'rgb(114, 118, 143)', fontSize: 10, fontWeight: 400, textAlign: 'left' }}>{item.name}</p>
                      <p style={{ margin: '2px 5px', color: item.color, fontSize: 12, }}>{item.value}</p>
                    </li>)
                  }
                </ul>
                <TickerWrapper>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                    onClick={handlePopupTicker}
                    style={{ ...iconWrapper, ...{fontSize: 20} }}
                  >
                    <path fillRule="evenodd" d="M10.35 8c.457 0 .844.316 1.041.727a4 4 0 007.218 0c.197-.411.584-.727 1.04-.727H21a1 1 0 100-2h-1.35c-.457 0-.844-.316-1.041-.727a4 4 0 00-7.218 0c-.197.411-.584.727-1.04.727H3a1 1 0 000 2h7.35zM13 7a2 2 0 104 0 2 2 0 00-4 0zm9 10a1 1 0 00-1-1h-7.35c-.457 0-.844-.316-1.041-.727a4 4 0 00-7.218 0c-.197.411-.584.727-1.04.727H3a1 1 0 100 2h1.35c.457 0 .844.316 1.041.727a4 4 0 007.218 0c.197-.411.584-.727 1.04-.727H21a1 1 0 001-1zM9 19a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  { 
                    show ?
                    <TickerPopContent>
                      <div>Ticker Preference</div>
                      <ul style={{ minWidth: 145 }}>
                        <li style={{ margin: '16px 0 0', display: 'flex', alignItems: 'center' }}>
                          <Form.Check aria-label="option 1" checked/>
                          <span>24h High</span>
                        </li>
                        <li style={{ margin: '16px 0 0', display: 'flex', alignItems: 'center' }}>
                          <Form.Check aria-label="option 1" checked/>
                          <span>24h Low</span>
                        </li>
                        <li style={{ margin: '16px 0 0', display: 'flex', alignItems: 'center' }}>
                          <Form.Check aria-label="option 1" checked/>
                          <span>24h Volume(ADA)</span>
                        </li>
                        <li style={{ margin: '16px 0 0', display: 'flex', alignItems: 'center' }}>
                          <Form.Check aria-label="option 1" checked/>
                          <span>24h Volume(USDT)</span>
                        </li>
                      </ul>
                    </TickerPopContent> : null
                  }
                  
                </TickerWrapper>
              </div>
              <div>
                <TradingChartDark />
              </div>
            </div>
            <div style={{ display: 'flex', flex: 0.4 }}>
              <div style={{ width: '50%' }}>
                <OrderBook />
              </div>
              <div style={{ width: '50%' }}>
                <TradeBox>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '10px 32px' }}>
                      <CustomButton>Cross</CustomButton>
                      <CustomButton>20px</CustomButton>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                          onClick={handlePopupTicker}
                          style={{ ...iconWrapper, ...{fontSize: 20} }}
                        >
                          <path fillRule="evenodd" d="M10.35 8c.457 0 .844.316 1.041.727a4 4 0 007.218 0c.197-.411.584-.727 1.04-.727H21a1 1 0 100-2h-1.35c-.457 0-.844-.316-1.041-.727a4 4 0 00-7.218 0c-.197.411-.584.727-1.04.727H3a1 1 0 000 2h7.35zM13 7a2 2 0 104 0 2 2 0 00-4 0zm9 10a1 1 0 00-1-1h-7.35c-.457 0-.844-.316-1.041-.727a4 4 0 00-7.218 0c-.197.411-.584.727-1.04.727H3a1 1 0 100 2h1.35c.457 0 .844.316 1.041.727a4 4 0 007.218 0c.197-.411.584-.727 1.04-.727H21a1 1 0 001-1zM9 19a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div style={{ position: 'relative' }}>
                        <Tabs
                          id="controlled-tab"
                          activeKey={key}
                          style={{ paddingTop: 16, border: 0}}
                          onSelect={k => setKey(k)}
                        >
                          <Tab eventKey="Limit" title="Limit">
                            <div style={{ padding: 16 }}>
                              <div>
                                <span style={{ color: 'rgb(114, 118, 143)' }}>Avbl<b style={{ color: 'rgb(240, 240, 245)' }}>-USDT</b></span>
                                <span style={{ float: 'right' }}>
                                  <svg style={iconWrapper} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="css-1m53j64"><path fillRule="evenodd" d="M5 7V5h14v2H5zM3 9V4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V9zm16 0v10H5V9h14zm-4 3a1 1 0 112 0v4a1 1 0 11-2 0v-4zm-7-1a1 1 0 100 2h4a1 1 0 100-2H8zm-1 5a1 1 0 112 0 1 1 0 01-2 0zm5-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                                </span>
                              </div>
                              <PriceWrapper>
                                <PriceContent>
                                  <InputPrefix>
                                    <label>Price</label>
                                  </InputPrefix>
                                  <Input lang='en' step='0.001' type='number' defaultValue='0.971'/>
                                  <InputSuffix>
                                    <div>Last</div>
                                    <div style={{ color: 'rgb(240, 240, 245)', marginLeft: 10 }}>USDT</div>
                                  </InputSuffix>
                                </PriceContent>
                              </PriceWrapper>
                              <PriceWrapper>
                                <PriceContent>
                                  <InputPrefix>
                                    <label>Size</label>
                                  </InputPrefix>
                                  <Input onChange={e => setSizeValue(e.target.value)} lang='en' step='1' type='text' value={`${sizeValue}%` ?? ""}/>
                                  <InputSuffix>
                                    <Dropdown.Toggle style={{ color: 'rgb(240, 240, 245)', textAlign: 'start', fontSize: 14 }} variant="transparent" id="dropdown-button-dark-example1">
                                      ADA
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={{ overflow: 'auto', border: 0, borderRadius: 4, backgroundColor: 'rgb(30, 31, 49)', padding: '0 0 8px', boxShadow: 'rgb(20 21 26 / 10%) 0px 0px 1px, rgb(71 77 87 / 8%) 0px 7px 14px, rgb(20 21 26 / 8%) 0px 3px 6px'}}>
                                      
                                    </Dropdown.Menu>
                                  </InputSuffix>
                                </PriceContent>
                              </PriceWrapper>
                              <Slider style={{ marginTop: 30}} onChange={e => setSizeValue(e)} defaultValue={sizeValue} min={0} step={25} max={100} graduated progress />
                              <ConnectButton>Connect Wallet</ConnectButton>
                            </div>
                          </Tab>
                          <Tab eventKey="Market" title="Market">
                            not ready
                          </Tab>
                          <Tab eventKey="trailingStop" title="Trailing Stop">
                            not ready
                          </Tab>
                        </Tabs>
                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">A limit order is an order to buy or sell at a specific price or better. Limit orders are not guaranteed to execute. <br/><a href="/">Learn More</a></Tooltip>}>
                          <span className="d-inline-block" style={{ position: 'absolute', top: 25, right: 12, cursor: 'pointer' }}>
                            <button disabled style={{ pointerEvents: 'none', background: 'transparent' }}>
                              <svg style={iconWrapper} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="css-1txptiw"><path d="M12 9a1 1 0 100-2 1 1 0 100 2zm0 8a1 1 0 001-1v-5a1 1 0 10-2 0v5a1 1 0 001 1z"></path><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-2 0a8 8 0 10-16 0 8 8 0 0016 0z" clipRule="evenodd"></path></svg>
                            </button>
                          </span>
                        </OverlayTrigger>
                        <div>
                        </div>
                      </div>
                    </div>
                </TradeBox>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ height: 'calc(100vh - 140px)', background: '#121221', width: '80%', marginTop: -15 }}>
              <Tabs
                id="controlled-tab"
                activeKey={historyKey}
                style={{ paddingTop: 16, border: 0}}
                onSelect={k => setHistoryKey(k)}
              >
                <Tab eventKey="positions" title="Positions(0)">
                  nothing
                </Tab>
                <Tab eventKey="openOders" title="Open Orders(0)">
                  nothing
                </Tab>
                <Tab eventKey="orderHistory" title="Order History">
                  nothing
                </Tab>
                <Tab eventKey="tradeHistory" title="Trade History">
                  nothing
                </Tab>
                <Tab eventKey="transactionHistory" title="Transaction History">
                  nothing
                </Tab>
                <Tab eventKey="assets" title="Assets">
                  nothing
                </Tab>
              </Tabs>
            </div>
            <div style={{ marginTop: -16, width: '20%' }}>
              <CommonWrapper>
                <MarginRatio>
                  <div style={{ color: 'rgb(240, 240, 245)', fontSize: 14, fontWeight: 500 }}>Margin Ratio</div>
                </MarginRatio>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 16px'}}>
                    <Label>Margin Ratio</Label>
                    <div style={{ display: 'flex' }}>
                      <div style={{ position: 'relative' }}>
                        <DashboardMark className="dashboard">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.05044 7.05025C8.31719 5.7835 10.0672 5 12.0002 5C13.9332 5 15.6832 5.7835 16.9499 7.05025L18.3642 5.63604C16.7355 4.00736 14.4855 3 12.0002 3C9.51491 3 7.26491 4.00736 5.63623 5.63604L7.05044 7.05025Z" class="medium-arc"></path><path fill-rule="evenodd" clipRule="evenodd" d="M16.9497 7.05044C18.2165 8.31719 19 10.0672 19 12.0002C19 13.9332 18.2165 15.6832 16.9497 16.9499L18.364 18.3642C19.9926 16.7355 21 14.4855 21 12.0002C21 9.51491 19.9926 7.26491 18.364 5.63623L16.9497 7.05044Z" class="high-arc"></path><path fill-rule="evenodd" clipRule="evenodd" d="M7.05025 16.9496C5.7835 15.6828 5 13.9328 5 11.9998C5 10.0668 5.7835 8.31681 7.05025 7.05006L5.63604 5.63585C4.00736 7.26453 3 9.51453 3 11.9998C3 14.4851 4.00736 16.7351 5.63604 18.3638L7.05025 16.9496Z" className="low-arc"></path></svg>
                        </DashboardMark>
                        <PointerMark className="pointer">
                          <svg className="pointer-svg" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.87868 0.878802C7.05025 -0.292771 8.94975 -0.292771 10.1213 0.878802C11.2929 2.05037 11.2929 3.94987 10.1213 5.12144C8.94975 6.29302 7.05025 6.29302 5.87868 5.12144C5.55118 4.79394 5.31522 4.40955 5.17082 4.00008L0.0616934 3.99994C-0.0208649 3.34007 -0.0210566 2.66824 0.0640927 1.99994L5.17083 2.00012C5.31524 1.59067 5.55119 1.2063 5.87868 0.878802ZM8.70711 2.29302C8.31658 1.90249 7.68342 1.90249 7.29289 2.29302C6.90237 2.68354 6.90237 3.3167 7.29289 3.70723C7.68342 4.09775 8.31658 4.09775 8.70711 3.70723C9.09763 3.3167 9.09763 2.68354 8.70711 2.29302Z" className="pointer-path"></path></svg>
                        </PointerMark>
                      </div>
                      <ProfitMark>
                        0.00%
                      </ProfitMark>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 16px'}}>
                    <Label>Maintenance Margin</Label>
                    <div style={{ color: 'rgb(240, 240, 245)' }}>
                      0.00 USDT
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 16px'}}>
                    <Label>Margin Balance</Label>
                    <div style={{ color: 'rgb(240, 240, 245)' }}>
                      0.00 USDT
                    </div>
                  </div>
                </div>
              </CommonWrapper>
              <CommonWrapper>
                <MarginRatio>
                  <div style={{ color: 'rgb(240, 240, 245)', fontSize: 14, fontWeight: 500 }}>Assets</div>
                </MarginRatio>
                <AssetButtonContent>
                  <AssetsButton disabled>Deposit</AssetsButton>
                  <AssetsButton disabled>Withdraw</AssetsButton>
                </AssetButtonContent>
              </CommonWrapper>
            </div>
          </div>
        </div>
      </>
    );
}
export default Exchange