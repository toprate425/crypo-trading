import React from 'react';
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border: 0px;
`

const TabContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #121221;
`
export default function OrderBook() {
  const orderBookButton = {
    color: 'rgb(114, 118, 143)', fontSize: 24, width: '1em', height: '1em'
  }
  return (
    <>
      <div style={{ margin: 1, height: 'calc(100% - 18px)', position: 'relative' }}>
        <h2 style={{ background: '#121221', color: 'rgb(240, 240, 245)', fontSize: 14, fontWeight: 500 }} className="heading">Order Book</h2>
        <TabContainer>
          <div>
            <Button>
              <svg style={orderBookButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M4 4h7v7H4V4z" fill="#EF3E9E"></path><path d="M4 13h7v7H4v-7z" fill="#1DB1A8"></path><path fillRule="evenodd" clipRule="evenodd" d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z" fill="currentColor"></path></svg>
            </Button>
            <Button>
              <svg style={orderBookButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M4 4h7v16H4V4z" fill="#1DB1A8"></path><path fillRule="evenodd" clipRule="evenodd" d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z" fill="currentColor"></path></svg>
            </Button>
            <Button>
              <svg style={orderBookButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M4 4h7v16H4V4z" fill="#EF3E9E"></path><path fillRule="evenodd" clipRule="evenodd" d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z" fill="currentColor"></path></svg>
            </Button>
          </div>
          <div>
            <Dropdown id="customDropdown">
              <Dropdown.Toggle style={{ color: 'rgb(240, 240, 245)', textAlign: 'start', fontWeight: 'bold', marginTop: 12 }} variant="transparent" id="dropdown-button-dark-example1">
                0.0001
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ overflow: 'auto', border: 0, borderRadius: 4, backgroundColor: 'rgb(30, 31, 49)', padding: '0 0 8px', boxShadow: 'rgb(20 21 26 / 10%) 0px 0px 1px, rgb(71 77 87 / 8%) 0px 7px 14px, rgb(20 21 26 / 8%) 0px 3px 6px'}}>
                
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </TabContainer>
        <table className="table" style={{ background: '#121221', height: 'calc(100% - 92px)' }}>
          <thead>
            <tr style={{ color: 'rgb(178, 180, 198)' }}>
              <th>Price(USDT)</th>
              <th>Size(ADA)</th>
              <th>Sum(ADA)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ color: 'rgb(178, 180, 198)' }}>
              <td style={{ color: '#ef3e9e'}}>0.022572</td>
              <td>1.253415</td>
              <td>15.27648</td>
            </tr>
            <tr style={{ color: 'rgb(178, 180, 198)' }}>
              <td style={{ color: '#ef3e9e'}}>0.020371</td>
              <td>1.205415</td>
              <td>15.25648</td>
            </tr>
            <tr style={{ color: 'rgb(178, 180, 198)' }}>
              <td style={{ color: '#ef3e9e'}}>0.023572</td>
              <td>1.645415</td>
              <td>15.23648</td>
            </tr>
            <tr style={{ color: 'rgb(178, 180, 198)' }}>
              <td style={{ color: '#ef3e9e'}}>0.032378</td>
              <td>1.206715</td>
              <td>15.25348</td>
            </tr>
            <tr style={{ color: 'rgb(178, 180, 198)' }}>
              <td style={{ color: '#ef3e9e'}}>0.022573</td>
              <td>1.262415</td>
              <td>15.19648</td>
            </tr>
            <tr style={{ color: 'rgb(178, 180, 198)' }}>
              <td style={{ color: '#ef3e9e'}}>0.154377</td>
              <td>1.225415</td>
              <td>15.35648</td>
            </tr>
            <tr style={{ color: 'rgb(178, 180, 198)' }}>
              <td style={{ color: '#ef3e9e'}}>0.120373</td>
              <td>1.285415</td>
              <td>15.25648</td>
            </tr>
            <tr style={{ color: 'rgb(178, 180, 198)' }}>
              <td style={{ color: '#ef3e9e'}}>0.028576</td>
              <td>1.291415</td>
              <td>15.26448</td>
            </tr>
          </tbody>
          <tbody style={{ position: 'relative', height: 40 }}>
            <tr style={{ color: 'rgb(178, 180, 198)' }}>
              <td style={{ position: 'absolute' }}>
                <span style={{ color: 'rgb(255, 90, 181)', fontSize: 20, fontWeight: 500, display: 'flex', alignItems: 'center' }}>
                  0.9683
                  <i style={{ marginLeft: 10 }} className="icon ion-md-arrow-down"></i>
                  <label style={{ fontSize: 12, color: 'rgb(178, 180, 198)', margin: '0 10px'}}>0.9688</label>
                </span>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr style={{ color: 'rgb(178, 180, 198)'}}>
              <td style={{ color: 'rgb(43, 189, 181)'}}>0.158373</td>
              <td>1.209515</td>
              <td>15.23248</td>
            </tr>
            <tr style={{ color: 'rgb(178, 180, 198)'}}>
              <td style={{ color: 'rgb(43, 189, 181)'}}>0.020851</td>
              <td>1.206245</td>
              <td>15.25458</td>
            </tr>
            <tr style={{ color: 'rgb(178, 180, 198)'}}>
              <td style={{ color: 'rgb(43, 189, 181)'}}>0.025375</td>
              <td>1.205715</td>
              <td>15.65648</td>
            </tr>
            <tr style={{ color: 'rgb(178, 180, 198)'}}>
              <td style={{ color: 'rgb(43, 189, 181)'}}>0.020252</td>
              <td>1.205495</td>
              <td>15.24548</td>
            </tr>
            <tr style={{ color: 'rgb(178, 180, 198)'}}>
              <td style={{ color: 'rgb(43, 189, 181)'}}>0.020373</td>
              <td>1.205415</td>
              <td>15.25648</td>
            </tr>
            <tr style={{ color: 'rgb(178, 180, 198)'}}>
              <td style={{ color: 'rgb(43, 189, 181)'}}>0.020156</td>
              <td>1.207515</td>
              <td>15.28948</td>
            </tr>
            <tr style={{ color: 'rgb(178, 180, 198)'}}>
              <td style={{ color: 'rgb(43, 189, 181)'}}>0.540375</td>
              <td>1.205915</td>
              <td>15.25748</td>
            </tr>
            <tr style={{ color: 'rgb(178, 180, 198)'}}>
              <td style={{ color: 'rgb(43, 189, 181)'}}>0.020372</td>
              <td>1.205415</td>
              <td>15.25648</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
