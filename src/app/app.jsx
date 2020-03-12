import React, { Component } from 'react';
import './app.css';

import StudentApp from '../student-data';


// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
class App extends Component{
	render(){
		return(
				<div className='container'>
					<div className='row'>
						<div className='col-md-10 offset-md-1'>

							<StudentApp />

						</div>
					</div>
				</div>
			);
		}
	}
export default App;