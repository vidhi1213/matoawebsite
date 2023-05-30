
import './App.css';
import Product from './Product';
import Home from './Home';
import Multistep from './Multistep';
import Cart from './Cart';
import Login from './Login';
import Filter from './Filter';
import Profile from './Profile';
import Admin from './Admin';
import PrivateRoute from './PrivateRoute'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AdminProduct from './AdminProduct';
function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/product' component={Product} />
        <PrivateRoute exact path='/multistep' component={Multistep} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/filter' component={Filter} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/admin' component={Admin} />
        <Route path='/admin/adminlogin' component={AdminLogin} />
        <Route exact path='/admin/adminproduct' component={AdminProduct} />

        {/* <Route
          path='/admin'
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={`${url}/`} component={Admin} />
              <Route path={`${url}/adminlogin`} component={AdminLogin} />
              <Route path={`/admin/adminproduct`} component={AdminProduct} />
            </Switch>
          )}
        /> */}
      </Switch>
    </>
  );
}

export default App;
