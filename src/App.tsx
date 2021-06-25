import { AuthProvider } from "./providers/auth";
import Button from './components/Button'

function App() {
  return (
    <AuthProvider>
      <Button setSize="large" setColor="blue" setFontColor="white"> TESTE </Button>
      teste inicial
    </AuthProvider>
  );
}

export default App;
