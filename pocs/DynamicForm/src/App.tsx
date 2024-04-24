import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserForm from './UserForm/form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
