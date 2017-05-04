import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { addCommas } from '../../helpers';
import renderIf from 'render-if';
import './TotalPortfolio.css';

const TotalPortfolio = ( { cryptoPortfolio, formattedTotalUSD, totalBTC } ) => {
      return (
        renderIf(cryptoPortfolio.length > 0)(
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
      )
    }

export default TotalPortfolio;
