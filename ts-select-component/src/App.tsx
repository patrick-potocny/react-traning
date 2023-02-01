import React, { useState } from 'react';
import Select from './Select';
import './index.css'

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
]

function App() {
  const [value1, setValue1] = useState<number | undefined>(undefined)

  return (
    <div className="app">
      <Select options={options} value={value1} setValue={setValue1}/>
    </div>
  );
}

export default App;
