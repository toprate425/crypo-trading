import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export default function MarketPairs() {
  return (
    <>
      <div className="market-pairs" style={{ border: 0 }}>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm" style={{ border: 0 }}>
              <i className="icon ion-md-search"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-describedby="inputGroup-sizing-sm"
            style={{ background: '#2c2d43', color: 'rgb(240, 240, 245)', border: 0 }}
          />
        </div>
        <Tabs defaultActiveKey="btc">
          <Tab eventKey="star" title="★">
            <table className="table star-active">
              <thead>
                <tr>
                  <th>Symbols</th>
                  <th>Last Price</th>
                  <th>24h%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> ETH/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00020255</td>
                  <td style={{ border: 0 }} className="red">-2.58%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> KCS/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00013192</td>
                  <td style={{ border: 0 }} className="green">+5.6%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> XRP/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00002996</td>
                  <td style={{ border: 0 }} className="red">-1.55%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> VET/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00000103</td>
                  <td style={{ border: 0 }} className="green">+1.8%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="btc" title="USDⓈ-M">
            <table className="table">
              <thead>
                <tr>
                  <th>Symbols</th>
                  <th>Last Price</th>
                  <th>24h%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> ETH/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00020255</td>
                  <td style={{ border: 0 }} className="red">-2.58%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> KCS/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00013192</td>
                  <td style={{ border: 0 }} className="green">+5.6%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> XRP/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00002996</td>
                  <td style={{ border: 0 }} className="red">-1.55%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> VET/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00000103</td>
                  <td style={{ border: 0 }} className="green">+1.8%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> EOS/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00000103</td>
                  <td style={{ border: 0 }} className="red">-2.05%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> BTT/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00002303</td>
                  <td style={{ border: 0 }} className="red">-1.05%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> LTC/BTC
                  </td>
                  <td style={{ border: 0 }}>0.03520103</td>
                  <td style={{ border: 0 }} className="green">+1.5%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> TRX/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00330103</td>
                  <td style={{ border: 0 }} className="red">-3.05%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> BSV/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00300103</td>
                  <td style={{ border: 0 }} className="green">+2.05%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> COTI/BTC
                  </td>
                  <td style={{ border: 0 }}>0.003500103</td>
                  <td style={{ border: 0 }} className="green">+2.85%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> XYT/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00003103</td>
                  <td style={{ border: 0 }} className="green">+3.55%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> BNB/BTC
                  </td>
                  <td style={{ border: 0 }}>0.003500103</td>
                  <td style={{ border: 0 }} className="red">-2.05%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> XMR/BTC
                  </td>
                  <td style={{ border: 0 }}>0.003500103</td>
                  <td style={{ border: 0 }} className="red">-1.05%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> TRY/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00000123</td>
                  <td style={{ border: 0 }} className="red">-2.05%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> ADA/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00050103</td>
                  <td style={{ border: 0 }} className="green">+5.05%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> NEO/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00340103</td>
                  <td style={{ border: 0 }} className="red">-1.05%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> XLM/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00035103</td>
                  <td style={{ border: 0 }} className="green">+5.05%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> ENQ/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00354103</td>
                  <td style={{ border: 0 }} className="green">+2.02%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> AVA/BTC
                  </td>
                  <td style={{ border: 0 }}>0.02535103</td>
                  <td style={{ border: 0 }} className="green">+3.05%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> AMB/BTC
                  </td>
                  <td style={{ border: 0 }}>0.05335103</td>
                  <td style={{ border: 0 }} className="green">+1.0%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> MAP/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00234103</td>
                  <td style={{ border: 0 }} className="red">-2.05%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> GO/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00354103</td>
                  <td style={{ border: 0 }} className="red">-6.50%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> KICK/BTC
                  </td>
                  <td style={{ border: 0 }}>0.02053103</td>
                  <td style={{ border: 0 }} className="red">-6.05%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> DBC/BTC
                  </td>
                  <td style={{ border: 0 }}>0.02535103</td>
                  <td style={{ border: 0 }} className="green">+7.05%</td>
                </tr>
                <tr>
                  <td style={{ border: 0, color: 'rgb(240, 240, 245)' }}>
                    <i className="icon ion-md-star"></i> GGC/BTC
                  </td>
                  <td style={{ border: 0 }}>0.00353103</td>
                  <td style={{ border: 0 }} className="red">-4.05%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
