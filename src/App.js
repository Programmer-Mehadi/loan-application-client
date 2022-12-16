import { StyledEngineProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/routes';

function App() {
  return (
    <div className="App max-w-[1440px] mx-auto">
      <StyledEngineProvider injectFirst>
      <RouterProvider router={router}></RouterProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
