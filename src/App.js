//Taylor Zweigle, 2024
import React, { useState } from "react";

import "./core/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <core-button prefix="add-outline" color="primary" onClick={() => setCount(count + 1)}>
        Increment
      </core-button>
      <core-button prefix="remove-outline" color="secondary" onClick={() => setCount(count - 1)}>
        Decrement
      </core-button>
      <core-button prefix="refresh-outline" color="error" onClick={() => setCount(0)}>
        Reset
      </core-button>
      <p>{count}</p>
    </div>
  );
}

export default App;
