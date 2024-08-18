import React from 'react';
import "./BotSpecs.css"

function BotSpecs({ bot, onEnlistBot, onBackToCollection }) {
  return (
    <div className="bot-specs">
      <button onClick={onBackToCollection}>Back</button>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <button onClick={() => onEnlistBot(bot)}>Enlist Bot</button>
    </div>
  );
}

export default BotSpecs;