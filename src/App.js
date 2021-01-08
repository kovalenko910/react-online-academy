import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Course} from "./pages/Course";
import {LayoutState} from "./context/layout/LayoutState";
import {CourseState} from "./context/course/CourseState";

function App() {
  return (
    <CourseState>
      <LayoutState>
        <BrowserRouter>
          <div className="container-fluid h-100">
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/course'} component={Course}/>
            </Switch>
          </div>
        </BrowserRouter>
      </LayoutState>
    </CourseState>
  );
}

export default App;
