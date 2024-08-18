import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import "./BotCollection.css"

function BotCollection({ onBotClick, onDischargeBot, sortOption, filters }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/bots')
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const filteredBots = bots
    .filter((bot) => {
      return filters.length === 0 || filters.includes(bot.bot_class);
    })
    .sort((a, b) => {
      if (sortOption === 'health') {
        return b.health - a.health;
      } else if (sortOption === 'damage') {
        return b.damage - a.damage;
      } else if (sortOption === 'armor') {
        return b.armor - a.armor;
      } else {
        return 0;
      }
    });

  return (
    <div className="bot-collection">
      {filteredBots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onBotClick={onBotClick}
          onDischargeBot={onDischargeBot}
        />
      ))}
    </div>
  );
}

export default BotCollection;