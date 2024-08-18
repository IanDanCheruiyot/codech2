import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import "./App.css"

function App() {
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortOption, setSortOption] = useState('');
  const [filters, setFilters] = useState([]);

  const handleBotClick = (bot) => {
    if (army.find((b) => b.id === bot.id)) return;
    setSelectedBot(bot);
  };

  const handleEnlistBot = (bot) => {
    if (army.find((b) => b.bot_class === bot.bot_class)) return;
    setArmy([...army, bot]);
    setSelectedBot(null);
  };

  const handleDischargeBot = (botId) => {
    setArmy(army.filter((bot) => bot.id !== botId));
  };

  const handleSortChange = (sortOption) => {
    setSortOption(sortOption);
  };

  const handleFilterChange = (filters) => {
    setFilters(filters);
  };

  return (
    <div className="App">
      <YourBotArmy
        army={army}
        onBotClick={handleBotClick}
        onDischargeBot={handleDischargeBot}
      />
      <SortBar
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onEnlistBot={handleEnlistBot}
          onBackToCollection={() => setSelectedBot(null)}
        />
      ) : (
        <BotCollection
          onBotClick={handleBotClick}
          onDischargeBot={handleDischargeBot}
          sortOption={sortOption}
          filters={filters}
        />
      )}
    </div>
  );
}

export default App;