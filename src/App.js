import React, { useState } from "react";

import "./core/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <core-button prefix="add" variant="primary" onClick={() => setCount(count + 1)}>
        Increment
      </core-button>
      <core-button prefix="remove-outline" variant="secondary" onClick={() => setCount(count - 1)}>
        Decrement
      </core-button>
      <p>{count}</p>
    </div>
  );
}

export default App;
