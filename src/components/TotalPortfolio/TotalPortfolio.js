import React from 'react';
import { Table } from 'react-bootstrap';
import './TotalPortfolio.css';

const TotalPortfolio = ( { cryptoPortfolio, formattedTotalUSD, totalBTC, formattedTotalProfitLoss,
                           oneHourStyles, twentyFourHourStyles, sevenDayStyles, totalPercentChangeOneHour,
                           totalPercentChangeTwentyFourHours, totalPercentChangeSevenDays,
                           change_1h_value, change_24h_value, change_7d_value } ) => {
    if (cryptoPortfolio.length > 0) {
        return (
              <div className="totalTables">
                <Table responsive className="totalTable">
                      <thead>
                         <tr className="headings">
                            <th>USD</th>
                            <th>BTC</th>
                            <th>Profit/Loss USD</th>
                            <th>
                                1 Hr
                            </th>
                            <th>
                                24 Hrs
                            </th>
                            <th>
                                7 Days
                            </th>
                         </tr>
                       </thead>
                     <tbody>
                           <tr className="portfolioTotals" >
                              <td>
                                ${ formattedTotalUSD }
                              </td>
                              <td>
                                { totalBTC }
                              </td>
                              <td>
                               ${ formattedTotalProfitLoss }
                              </td>
                              <td className="percentage__changes" style={oneHourStyles}>
                                  {totalPercentChangeOneHour}%  <span className="changeValue">${change_1h_value}</span></td>
                              <td className="percentage__changes" style={twentyFourHourStyles}>
                                  {totalPercentChangeTwentyFourHours}%    <span className="changeValue">${change_24h_value}</span></td>
                              <td className="percentage__changes" style={sevenDayStyles}>
                                  {totalPercentChangeSevenDays}%   <span className="changeValue">${change_7d_value}</span></td>
                          </tr>
                     </tbody>
                </Table>
                <Table responsive className="totalTable totalTablePercentages">
                      <thead>
                         <tr className="headings">
                            <th>
                                1 Hr
                            </th>
                            <th>
                                24 Hrs
                            </th>
                            <th>
                                7 Days
                            </th>
                         </tr>
                       </thead>
                     <tbody>
                           <tr className="portfolioTotals" >
                               <td className="percentage__changes" style={oneHourStyles}>
                                   {totalPercentChangeOneHour}% <span className="changeValue">${change_1h_value}</span></td>
                               <td className="percentage__changes" style={twentyFourHourStyles}>
                                   {totalPercentChangeTwentyFourHours}% <span className="changeValue">${change_24h_value}</span></td>
                               <td className="percentage__changes" style={sevenDayStyles}>
                                   {totalPercentChangeSevenDays}% <span className="changeValue">${change_7d_value}</span></td>
                          </tr>
                     </tbody>
                </Table>
              </div>
          )
    } else {
        return false
    }
}
export default TotalPortfolio;
