import React from 'react';

export const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Scope Area</th>
            <th>PRI</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, index) => (
            <tr key={index}>
              <td>{t.scopeArea}</td>
              <td>{t.pri}</td>
              <td>{t.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};