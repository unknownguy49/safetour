import React from 'react';

interface BlockchainRecord {
  txHash: string;
  timestamp: string;
  status: string;
}

const BlockchainRecords: React.FC<{ records: BlockchainRecord[] }> = ({ records }) => (
  <div className="mt-4">
    <h3 className="font-bold mb-2">Blockchain Records</h3>
    {records.length === 0 ? (
      <div>No blockchain records found.</div>
    ) : (
      <ul className="space-y-2">
        {records.map((rec) => (
          <li key={rec.txHash} className="border p-2 rounded">
            <div>Tx Hash: <span className="font-mono">{rec.txHash}</span></div>
            <div>Timestamp: {rec.timestamp}</div>
            <div>Status: {rec.status}</div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default BlockchainRecords;
