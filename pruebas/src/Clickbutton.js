import React, { useState } from 'react';

const Clickbutton = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count > 0 && <p>Se clicó {count} veces</p>}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default Clickbutton;
