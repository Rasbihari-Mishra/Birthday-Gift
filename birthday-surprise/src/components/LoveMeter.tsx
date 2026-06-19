import React, { useState } from 'react';

const LoveMeter: React.FC<{ initial?: number }> = ({ initial = 50 }) => {
  const [value, setValue] = useState(initial);
  return (
    <div style={{ padding: 12 }}>
      <label>Love meter: {value}%</label>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default LoveMeter;
