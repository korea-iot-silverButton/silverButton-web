/** @jsxImportSource @emotion/react */
import * as s from './style';

interface Tab {
  key: string;
  label: string;
}

interface MessageTabProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

const TABS: Tab[] = [
  { key: 'received', label: '수신함' },
  { key: 'sent', label: '발신함' },
  { key: 'all', label: '전체쪽지' },
];

const MessageTab: React.FC<MessageTabProps> = ({ currentTab, setCurrentTab }) => {
  return (
    <div css={{ display: 'flex', marginBottom: '20px' }}>
      {TABS.map((tab) => (
        <button
          css={[s.messageTab, currentTab === tab.key && s.activeTab]}
          key={tab.key}
          onClick={() => setCurrentTab(tab.key)}
          aria-selected={currentTab === tab.key}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default MessageTab;


