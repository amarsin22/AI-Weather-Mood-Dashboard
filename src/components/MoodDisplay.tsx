import React from 'react';

const getMood = (temp: number, condition: string) => {
  const c = condition.toLowerCase();
  if (c.includes('rain')) return '🌧️ Calm & cozy day — read a book!';
  if (c.includes('snow')) return '❄️ Perfect for hot chocolate!';
  if (temp > 30) return '🥵 Hot vibes — stay hydrated!';
  if (temp > 20) return '🌤️ Great weather — go for a walk!';
  return '🌿 Chill and peaceful — relax!';
};

const MoodDisplay: React.FC<{ temp: number; condition: string }> = ({ temp, condition }) => {
  const mood = getMood(temp, condition);
  return (
    <div className="mood-card">
      <h3>Mood Suggestion</h3>
      <p>{mood}</p>
    </div>
  );
};

export default MoodDisplay;
