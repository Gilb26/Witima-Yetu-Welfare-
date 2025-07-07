import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import MembersList from './components/MembersList';
import ContributionsList from './components/ContributionsList';
import { mockMembers, mockContributions, mockStats } from './data/mockData';
import { Member } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAddMember = () => {
    // TODO: Implement add member functionality
    console.log('Add member clicked');
  };

  const handleEditMember = (member: Member) => {
    // TODO: Implement edit member functionality
    console.log('Edit member:', member);
  };

  const handleAddContribution = () => {
    // TODO: Implement add contribution functionality
    console.log('Add contribution clicked');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <Dashboard 
            stats={mockStats} 
            recentContributions={mockContributions}
          />
        );
      case 'members':
        return (
          <MembersList 
            members={mockMembers}
            onAddMember={handleAddMember}
            onEditMember={handleEditMember}
          />
        );
      case 'contributions':
        return (
          <ContributionsList 
            contributions={mockContributions}
            onAddContribution={handleAddContribution}
          />
        );
      default:
        return <Dashboard stats={mockStats} recentContributions={mockContributions} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img 
                src="/edited image.png" 
                alt="Witima Yetu Welfare" 
                className="h-8 w-8 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900">Witima Yetu Welfare</p>
                <p className="text-sm text-gray-600">Unity is Strength</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600">
                © 2025 Witima Yetu Welfare. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Building stronger communities together
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;