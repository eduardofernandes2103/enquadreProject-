import { AuthProvider } from "./providers/auth";
import Routes from './Routes';
import GlobalStyle from "./styles/global";

function App() {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;
