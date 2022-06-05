// import React from 'react'
// import { Accordion, Footer } from './components'
// import { Card , Feature} from './components'
// import { HeaderContainer } from './containers/header'
// import{SelectProfileContainer} from './containers/profiles'
// import { FooterContainer } from './containers/footer'
//  import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
//  import { Home, Browse, SignIn, SignUp } from './pages';
// import * as ROUTES from './constants/routes';
// import { FaqsContainer } from './containers/faqs'
// import { JumbotronContainer } from './containers/jumbotron'
// import { IsUserRedirect } from './helpers/routes'
// export default function App() { 
//   const user= null;
// return (
  
//   <Router>
//   <Route path='/signin'>
//   <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>

//   <SignIn />
//   </IsUserRedirect>
//   </Route>
//   <Route exact path='/browse'>
//   <Browse/>
//   </Route>
//   <Route exact path='/signin'>
//   <SignIn />
//   </Route>
 
//   <Route exact path='/signup'>
//  <SignUp />
//  </Route>
//   <Route exact path={ROUTES.HOME}>
//  <Home />
//  </Route>
//  </Router>
 
//   )
// }
      



import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
