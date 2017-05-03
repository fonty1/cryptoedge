import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { addCommas } from '../../helpers';
import renderIf from 'render-if';

const TotalPortfolio = ( { cryptoPortfolio, totalUSD, totalBTC } ) => {
      return (
        renderIf(cryptoPortfolio.length > 0)(
            <Table responsive className="cryptotable">
                  <thead>
                     <tr>
                        <th>Total USD</th>
                        <th>Total BTC</th>
                     </tr>
                   </thead>
                 <tbody>
                       <tr className="portfolioTotals" >
                          <td>
                            { totalUSD }
                          </td>
                          <td>
                            { totalBTC }
                          </td>
                      </tr>
                 </tbody>
            </Table>
        )
      )
    }

export default TotalPortfolio;
