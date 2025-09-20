// Mock blockchain utility functions for KYC integration
import type { KYCFormData } from '../app/kyc/kyc-form';

export async function submitKYCData(data: KYCFormData): Promise<void> {
  // Simulate hashing and submitting to blockchain
  await new Promise((res) => setTimeout(res, 1200));
  // In real implementation, hash data and send to backend/blockchain
}

export async function getKYCStatus(documentId: string): Promise<'pending' | 'verified' | 'rejected'> {
  // Simulate fetching status from blockchain
  await new Promise((res) => setTimeout(res, 500));
  // Return random status for demo
  const statuses = ['pending', 'verified', 'rejected'] as const;
  return statuses[Math.floor(Math.random() * statuses.length)];
}

export interface BlockchainRecord {
  txHash: string;
  timestamp: string;
  status: string;
}

export async function getBlockchainRecords(documentId: string): Promise<BlockchainRecord[]> {
  // Simulate fetching blockchain records
  await new Promise((res) => setTimeout(res, 500));
  // Return mock records
  return [
    {
      txHash: '0xabc123...def',
      timestamp: new Date().toISOString(),
      status: 'Success',
    },
  ];
}
