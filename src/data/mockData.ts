import { Member, Contribution, WelfareStats } from '../types';

export const mockMembers: Member[] = [
  {
    id: '1',
    name: 'John Kamau',
    email: 'john.kamau@email.com',
    phone: '+254712345678',
    membershipNumber: 'WYW001',
    joinDate: '2023-01-15',
    status: 'active',
    totalContributions: 15000,
    lastContribution: '2024-01-15',
    address: 'Nairobi, Kenya',
    emergencyContact: {
      name: 'Mary Kamau',
      phone: '+254723456789',
      relationship: 'Spouse'
    }
  },
  {
    id: '2',
    name: 'Grace Wanjiku',
    email: 'grace.wanjiku@email.com',
    phone: '+254734567890',
    membershipNumber: 'WYW002',
    joinDate: '2023-02-20',
    status: 'active',
    totalContributions: 12500,
    lastContribution: '2024-01-10',
    address: 'Kiambu, Kenya',
    emergencyContact: {
      name: 'Peter Wanjiku',
      phone: '+254745678901',
      relationship: 'Brother'
    }
  },
  {
    id: '3',
    name: 'David Mwangi',
    email: 'david.mwangi@email.com',
    phone: '+254756789012',
    membershipNumber: 'WYW003',
    joinDate: '2023-03-10',
    status: 'active',
    totalContributions: 18000,
    lastContribution: '2024-01-12',
    address: 'Thika, Kenya'
  },
  {
    id: '4',
    name: 'Sarah Njeri',
    email: 'sarah.njeri@email.com',
    phone: '+254767890123',
    membershipNumber: 'WYW004',
    joinDate: '2023-04-05',
    status: 'inactive',
    totalContributions: 8500,
    lastContribution: '2023-12-15',
    address: 'Nakuru, Kenya'
  }
];

export const mockContributions: Contribution[] = [
  {
    id: '1',
    memberId: '1',
    memberName: 'John Kamau',
    amount: 2000,
    date: '2024-01-15',
    type: 'monthly',
    description: 'January monthly contribution',
    paymentMethod: 'mobile_money',
    receiptNumber: 'RCP001',
    status: 'completed'
  },
  {
    id: '2',
    memberId: '2',
    memberName: 'Grace Wanjiku',
    amount: 2000,
    date: '2024-01-10',
    type: 'monthly',
    description: 'January monthly contribution',
    paymentMethod: 'bank_transfer',
    receiptNumber: 'RCP002',
    status: 'completed'
  },
  {
    id: '3',
    memberId: '3',
    memberName: 'David Mwangi',
    amount: 5000,
    date: '2024-01-12',
    type: 'special',
    description: 'Emergency fund contribution',
    paymentMethod: 'cash',
    receiptNumber: 'RCP003',
    status: 'completed'
  },
  {
    id: '4',
    memberId: '1',
    memberName: 'John Kamau',
    amount: 2000,
    date: '2024-01-08',
    type: 'monthly',
    description: 'December monthly contribution',
    paymentMethod: 'mobile_money',
    receiptNumber: 'RCP004',
    status: 'completed'
  }
];

export const mockStats: WelfareStats = {
  totalMembers: 4,
  activeMembers: 3,
  totalContributions: 54000,
  monthlyTarget: 50000,
  currentMonthContributions: 9000
};