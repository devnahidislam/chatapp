import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element="Home Page" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
