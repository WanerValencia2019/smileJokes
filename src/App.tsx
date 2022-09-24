import AuthProvider from './context/auth/auth.provider'
import AppRoutes from './routes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import JokesProvider from './context/jokes/jokes.provider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <JokesProvider>
          <ToastContainer />
          <AppRoutes />
        </JokesProvider>
      </AuthProvider>
    </div>
  )
}

export default App
