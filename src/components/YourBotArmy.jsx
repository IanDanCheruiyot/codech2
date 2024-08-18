import React from 'react';
import "./YourBotArmy.css"
import BotCard from './BotCard';

function YourBotArmy({ army, onBotClick, onDischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map(bot => (
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

export default YourBotArmy;