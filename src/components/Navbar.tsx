import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import About from './About'
import Current from './current'
import HistorySelect from './HistorySelect'

const Navbar = () => {
	return (
		<Router>
			<div className='my-5'>
				<p className='text-center text-3xl italic my-5'>Minimal Bitcoin App</p>
				<div className='flex justify-center text-md space-x-5'>
					<p>
						<Link to='/current'>Current price</Link>
					</p>
					<p>|</p>
					<p>
						<Link to='/history/select'>Historical price</Link>
					</p>
					<p>|</p>
					<p>
						<Link to='/about'>About me</Link>
					</p>
				</div>
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

					<Route path='/about'>
						<About />
					</Route>
				</Switch>
			</div>
		</Router>

	)
}

export default Navbar