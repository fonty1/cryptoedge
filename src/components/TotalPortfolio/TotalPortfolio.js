import React from 'react';
import { Table } from 'react-bootstrap';
import './TotalPortfolio.css';

const TotalPortfolio = ( { cryptoPortfolio, formattedTotalUSD, totalBTC } ) => {
    if (cryptoPortfolio.length > 0) {
        return (
              <Table responsive className="totalTable">
                    <thead>
                       <tr className="headings">
                          <th>Total USD</th>
                          <th>Total BTC</th>
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
                        </tr>
                   </tbody>
              </Table>
          )
    } else {
        return false
    }
}

export default TotalPortfolio;
