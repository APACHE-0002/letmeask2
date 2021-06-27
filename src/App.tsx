import { BrowserRouter, Route, Switch} from 'react-router-dom';

import {Home} from './pages/Home';
import {NewRoom} from './pages/NewRoom';
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContext';
import { AdminRoom } from './pages/AdminRoom';

/*TestContext, para repassar uma informaçao juntamente dentro do
browserrouter assim toda aplicaçao tendo acesso a essa informaçao
export const TestContext = createContext({} as any);
  const [value, setValue] = useState('');
*/

function App() {
  
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/new" component={NewRoom} />
      <Route exact path="/rooms/:id" component={Room}/>

      <Route exact path="/admin/rooms/:id" component={AdminRoom}/>
      </Switch>
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
