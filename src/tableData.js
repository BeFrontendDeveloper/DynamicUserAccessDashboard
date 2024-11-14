import React from 'react';
import './tableData.css';

const OrderTable = () => {
  // Example data for the table
  const data = [
    {
      orderSourceSystem: 'Information TBD',
      transactionStatus: 'Information TBD',
      initiatedBy: 'Information TBD',
      initiatedDate: 'Information TBD',
    },
    {
      orderSourceSystem: 'Information TBD',
      transactionStatus: 'Information TBD',
      initiatedBy: 'Information TBD',
      initiatedDate: 'Information TBD',
    },
    {
      orderSourceSystem: 'Information TBD',
      transactionStatus: 'Information TBD',
      initiatedBy: 'Information TBD',
      initiatedDate: 'Information TBD',
    },
    {
        orderSourceSystem: 'Information TBD',
        transactionStatus: 'Information TBD',
        initiatedBy: 'Information TBD',
        initiatedDate: 'Information TBD',
    },
    {
        orderSourceSystem: 'Information TBD',
        transactionStatus: 'Information TBD',
        initiatedBy: 'Information TBD',
        initiatedDate: 'Information TBD',
    },
    {
        orderSourceSystem: 'Information TBD',
        transactionStatus: 'Information TBD',
        initiatedBy: 'Information TBD',
        initiatedDate: 'Information TBD',
    },

  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Order Source System</th>
            <th>Transaction Status</th>
            <th>Initiated By</th>
            <th>Initiated Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order, index) => (
            <tr key={index}>
              <td>{order.orderSourceSystem}</td>
              <td>{order.transactionStatus}</td>
              <td>{order.initiatedBy}</td>
              <td>{order.initiatedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
