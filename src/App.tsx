import React from "react";

function App() {
  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = (e.target as any).result;
      console.log(text);
      alert(text);
    };
    reader.readAsText((e.target as any).files[0]);
  };

  return (
    <div className="App">
      <input type="file" onChange={onChangeFile} />
    </div>
  );
}

export default App;
