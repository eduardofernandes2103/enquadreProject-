import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Store from '../pages/Store';
import Cart from '../pages/Cart'

const Routes = () =>{
    return (
                <Switch>
            
                    <Route exact path="/" >
                        <Home />
                    </Route>

                    <Route exact path="/login" >
                        <Login />
                    </Route>

                    <Route exact path="/signup" >
                        <Signup />
                    </Route>

                    <Route exact path="/store" >
                        <Store />
                    </Route>

                    <Route exact path="/cart" >
                        <Cart />
                    </Route>
                </Switch>
    )
}

export default Routes
