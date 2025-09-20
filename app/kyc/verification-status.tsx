import React from 'react';

type Status = 'pending' | 'verified' | 'rejected';

const statusMap: Record<Status, { label: string; color: string }> = {
  pending: { label: 'Pending', color: 'yellow' },
  verified: { label: 'Verified', color: 'green' },
  rejected: { label: 'Rejected', color: 'red' },
};

const VerificationStatus: React.FC<{ status: Status }> = ({ status }) => (
  <div className={`p-2 rounded bg-${statusMap[status].color}-100 text-${statusMap[status].color}-800`}>
    KYC Status: <b>{statusMap[status].label}</b>
  </div>
);

export default VerificationStatus;
