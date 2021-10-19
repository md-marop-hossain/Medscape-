import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import AuthProvider from './contexts/AuthProvider';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import Medicine from './Pages/Medicine/Medicine';
import Equipment from './Pages/Equipment/Equipment';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import AboutUs from './Pages/AboutUs/AboutUs';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/medicine/:medicineId">
              <Medicine></Medicine>
            </PrivateRoute>
            <PrivateRoute exact path="/equipment">
              <Equipment></Equipment>
            </PrivateRoute>
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
