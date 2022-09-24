import AuthProvider from './context/auth/auth.provider'
import AppRoutes from './routes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import JokesProvider from './context/jokes/jokes.provider';

import LoaderProvider from './context/loader/loader.provider';

function App() {
  return (
    <div className="App">
      <LoaderProvider>
        <AuthProvider>
          <JokesProvider>
            <ToastContainer />
            <AppRoutes />
          </JokesProvider>
        </AuthProvider>
      </LoaderProvider>
    </div>
  )
}

export default App
