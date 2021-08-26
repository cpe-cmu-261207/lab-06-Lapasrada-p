import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About';
import Current from './components/current';
import HistoryResult from './components/HistoryResult';
import HistorySelect from './components/HistorySelect';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
					<Route path='/' exact>
						<Current />
					</Route>

					<Route path='/current'>
						<Current />
					</Route>

					<Route path='/history/select'>
						<HistorySelect />
					</Route>

					<Route path='/history/result'>
						<HistoryResult />
					</Route>

					<Route path='/about'>
						<About />
					</Route>
				</Switch>
      
    </Router>
  );
}

export default App;
