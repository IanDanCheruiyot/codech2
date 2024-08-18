import React from 'react';
import "./BotCard.css"

function BotCard({ bot, onBotClick, onDischargeBot }) {
  return (
    <div className="bot-card" onClick={() => onBotClick(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={(e) => { e.stopPropagation(); onDischargeBot(bot.id); }}>Discharge</button>
    </div>
  );
}

export default BotCard;