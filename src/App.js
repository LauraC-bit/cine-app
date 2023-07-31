import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favoris" element={<Favoris />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
