import React from 'react';
import { Users, DollarSign, TrendingUp, Calendar, Target, AlertCircle } from 'lucide-react';
import { WelfareStats, Contribution } from '../types';

interface DashboardProps {
  stats: WelfareStats;
  recentContributions: Contribution[];
}

const Dashboard: React.FC<DashboardProps> = ({ stats, recentContributions }) => {
  const progressPercentage = (stats.currentMonthContributions / stats.monthlyTarget) * 100;

  const StatCard = ({ 
    title, 
    value, 
    icon: Icon, 
    color, 
    subtitle 
  }: { 
    title: string; 
    value: string | number; 
    icon: any; 
    color: string; 
    subtitle?: string;
  }) => (
    <div className="bg-white rounded-xl shadow-md p-6 border-l-4" style={{ borderLeftColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className="p-3 rounded-full" style={{ backgroundColor: `${color}20` }}>
          <Icon className="h-8 w-8" style={{ color }} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Welcome to Witima Yetu Welfare</h2>
        <p className="text-blue-100 text-lg">Managing our community with unity and strength</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Members"
          value={stats.totalMembers}
          icon={Users}
          color="#3B82F6"
          subtitle={`${stats.activeMembers} active`}
        />
        <StatCard
          title="Total Contributions"
          value={`KSh ${stats.totalContributions.toLocaleString()}`}
          icon={DollarSign}
          color="#10B981"
        />
        <StatCard
          title="This Month"
          value={`KSh ${stats.currentMonthContributions.toLocaleString()}`}
          icon={TrendingUp}
          color="#F59E0B"
          subtitle={`${progressPercentage.toFixed(1)}% of target`}
        />
        <StatCard
          title="Monthly Target"
          value={`KSh ${stats.monthlyTarget.toLocaleString()}`}
          icon={Target}
          color="#8B5CF6"
        />
      </div>

      {/* Progress Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Monthly Progress</h3>
          <span className="text-sm text-gray-500">
            {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </span>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              KSh {stats.currentMonthContributions.toLocaleString()} of KSh {stats.monthlyTarget.toLocaleString()}
            </span>
            <span className="font-medium text-blue-600">{progressPercentage.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            ></div>
          </div>
          {progressPercentage < 100 && (
            <div className="flex items-center space-x-2 text-amber-600">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">
                KSh {(stats.monthlyTarget - stats.currentMonthContributions).toLocaleString()} remaining to reach target
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Recent Contributions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Recent Contributions</h3>
          <Calendar className="h-5 w-5 text-gray-400" />
        </div>
        <div className="space-y-4">
          {recentContributions.slice(0, 5).map((contribution) => (
            <div key={contribution.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{contribution.memberName}</p>
                  <p className="text-sm text-gray-500">{contribution.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">+KSh {contribution.amount.toLocaleString()}</p>
                <p className="text-sm text-gray-500">{new Date(contribution.date).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;