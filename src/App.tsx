import AuthProvider from './context/auth/auth.provider'
import AppRoutes from './routes'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  )
}

export default App
