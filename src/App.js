import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Course} from "./pages/Course";
import {LayoutState} from "./context/layout/LayoutState";
import {CourseState} from "./context/course/CourseState";
import {About} from "./pages/About";
import {Courses} from "./pages/Courses";
import {Dashboard} from "./pages/Dashboard";

function App() {
  return (
    <CourseState>
      <LayoutState>
        <BrowserRouter>
          <div className="container-fluid h-100">
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/course'} component={Course}/>
              <Route path={'/about'} component={About}/>
              <Route path={'/courses'} component={Courses}/>
              <Route path={'/dashboard'} component={Dashboard}/>
            </Switch>
          </div>
        </BrowserRouter>
      </LayoutState>
    </CourseState>
  );
}

export default App;
