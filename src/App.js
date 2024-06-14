import {Routes, Route} from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import StudentDash from './components/StudentDash';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' Component={CourseList} />
        <Route exact path='/coursedetails' Component={CourseDetails} />
        <Route exact path='/studentdash' Component={StudentDash} />
      </Routes>
    </>
  );
}

export default App;
