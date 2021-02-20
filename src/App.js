import {BrowserRouter, Route, Switch} from "react-router-dom"
import Login from "./components/login/login"
import ResumeBook from "./components/resume/resumebook"

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path = "/" component={ResumeBook} exact />
      <Route path = "/login" component={Login} exact />
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
