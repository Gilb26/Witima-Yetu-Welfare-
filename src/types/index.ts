export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  membershipNumber: string;
  joinDate: string;
  status: 'active' | 'inactive' | 'suspended';
  totalContributions: number;
  lastContribution?: string;
  address?: string;
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
}

export interface Contribution {
  id: string;
  memberId: string;
  memberName: string;
  amount: number;
  date: string;
  type: 'monthly' | 'special' | 'emergency' | 'project';
  description?: string;
  paymentMethod: 'cash' | 'bank_transfer' | 'mobile_money';
  receiptNumber: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface WelfareStats {
  totalMembers: number;
  activeMembers: number;
  totalContributions: number;
  monthlyTarget: number;
  currentMonthContributions: number;
}