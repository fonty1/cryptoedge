import React from 'react';
import { Table } from 'react-bootstrap';
import './TotalPortfolio.css';

const TotalPortfolio = ( { cryptoPortfolio, formattedTotalUSD, totalBTC, formattedTotalProfitLoss,
                           oneHourStyles, twentyFourHourStyles, sevenDayStyles, totalPercentChangeOneHour,
                           totalPercentChangeTwentyFourHours, totalPercentChangeSevenDays } ) => {
    if (cryptoPortfolio.length > 0) {
        return (
              <Table responsive className="totalTable">
                    <thead>
                       <tr className="headings">
                          <th>Total USD</th>
                          <th>Total BTC</th>
                          <th>Total USD Profit/Loss</th>
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
                                {totalPercentChangeOneHour}%</td>
                            <td className="percentage__changes" style={twentyFourHourStyles}>
                                {totalPercentChangeTwentyFourHours}%</td>
                            <td className="percentage__changes" style={sevenDayStyles}>
                                {totalPercentChangeSevenDays}%</td>
                        </tr>
                   </tbody>
              </Table>
          )
    } else {
        return false
    }
}
export default TotalPortfolio;
