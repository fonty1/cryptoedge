import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
// yourTotalUSD: '0',
// yourTotalBTC
//
import { addCommas } from '../../helpers';

const TotalPortfolio = ( { } ) => {

      return (
        <Table responsive className="cryptotable">
            <thead>
               <tr>
                  <th>Total</th>
               </tr>
             </thead>
             <tbody>
                   <tr className="portfolioTotals" >
                      <td>
                      </td>
                  </tr>
             </tbody>
        </Table>
      )
    }

export default TotalPortfolio;
