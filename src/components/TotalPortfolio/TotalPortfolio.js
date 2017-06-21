import React from 'react';
import './TotalPortfolio.css';

const TotalPortfolio = ( { cryptoPortfolio, formattedTotalUSD, totalBTC, formattedTotalProfitLoss,
                           oneHourStyles, twentyFourHourStyles, sevenDayStyles, totalPercentChangeOneHour,
                           totalPercentChangeTwentyFourHours, totalPercentChangeSevenDays,
                           change_1h_value, change_24h_value, change_7d_value } ) => {
    if (cryptoPortfolio.length > 0) {
        return (
              <div className="totalTable">
                      <div className="flexTable desktop">
                         <div className="table-row header">
                            <div className="totalUSDcolumn column">USD</div>
                            <div className="totalBTCcolumn column">BTC</div>
                            <div className="totalPLColumn column">Profit/Loss USD</div>
                            <div className="oneHourColumn column">
                                1 Hr
                            </div>
                            <div className="twentyFourHoursColumn column">
                                24 Hrs
                            </div>
                            <div className="sevenDaysColumn column">
                                7 Days
                            </div>
                         </div>
                           <div className="table-row" >
                              <div className="totalUSDcolumn column">
                                ${ formattedTotalUSD }
                              </div>
                              <div className="totalBTCcolumn column">
                                { totalBTC }
                              </div>
                              <div className="totalPLColumn column">
                               ${ formattedTotalProfitLoss }
                              </div>
                              <div className="oneHourColumn column" style={oneHourStyles}>
                                  {totalPercentChangeOneHour}% &nbsp;&nbsp; <span className="changeValue">${change_1h_value}</span></div>
                              <div className="twentyFourHoursColumn column" style={twentyFourHourStyles}>
                                  {totalPercentChangeTwentyFourHours}% &nbsp;&nbsp; <span className="changeValue">${change_24h_value}</span></div>
                              <div className="sevenDaysColumn column" style={sevenDayStyles}>
                                  {totalPercentChangeSevenDays}% &nbsp;&nbsp; <span className="changeValue">${change_7d_value}</span></div>
                          </div>
                        </div>

                        <div className="flexTable mobile">
                          <div className="table-row header">
                             <div className="totalUSDcolumn column">USD</div>
                             <div className="totalBTCcolumn column">BTC</div>
                             <div className="totalPLColumn column">Profit/Loss USD</div>
                          </div>
                           <div className="table-row" >
                               <div className="totalUSDcolumn column">
                                 ${ formattedTotalUSD }
                               </div>
                               <div className="totalBTCcolumn column">
                                 { totalBTC }
                               </div>
                               <div className="totalPLColumn column">
                                ${ formattedTotalProfitLoss }
                               </div>
                          </div>
                        </div>

                        <div className="flexTable mobile">
                         <div className="table-row header">
                            <div className="oneHourColumn column">
                                1 Hr
                            </div>
                            <div className="twentyFourHoursColumn column">
                                24 Hrs
                            </div>
                            <div className="sevenDaysColumn column">
                                7 Days
                            </div>
                         </div>
                           <div className="table-row" >
                               <div className="oneHourColumn column" style={oneHourStyles}>
                                   {totalPercentChangeOneHour}% &nbsp;&nbsp; <span className="changeValue">${change_1h_value}</span></div>
                               <div className="twentyFourHoursColumn column" style={twentyFourHourStyles}>
                                   {totalPercentChangeTwentyFourHours}% &nbsp;&nbsp; <span className="changeValue">${change_24h_value}</span></div>
                               <div className="sevenDaysColumn column" style={sevenDayStyles}>
                                   {totalPercentChangeSevenDays}% &nbsp;&nbsp; <span className="changeValue">${change_7d_value}</span></div>
                          </div>
                        </div>
              </div>
          )
    } else {
        return false
    }
}
export default TotalPortfolio;
