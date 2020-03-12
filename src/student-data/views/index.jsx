import React from 'react';

import ListView from './list-view';
import TableView from './table-view';
// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
class ViewStudents extends React.Component{

state={
	isListview:true, // true or false
	view:'list'
};

generateView = () =>{
	const{students, handleEdit,handleDelete} = this.props

	if (this.state.isListview) {
		return <ListView students={students} handleEdit={handleEdit} handleDelete={handleDelete} />
	} else{
		return <TableView students={students} handleEdit={handleEdit} handleDelete={handleDelete} />
	}
};

handleViewChange=(e)=>{
	this.setState({
		view: e.target.value,
		isListview: e.target.value === 'list'
	});
};

render(){
	return(
			<div  className="text-center"><hr/>
				<h4 className='font-weight-light'>Student List View</h4>
				<div>
				<input
					type='radio'
					name='view'
					checked={this.state.isListview}
					value='list'
					onChange={this.handleViewChange}
				 /> 
				  <span className='font-weight-light mr-2'> List Grid </span> 
				 <input
					type='radio'
					name='view'
					checked={!this.state.isListview}
					value='table'
					onChange={this.handleViewChange}
				 /> <span className='font-weight-light'> List Table  </span> 
				</div>
				<hr/>
				<div>
					{this.generateView()}
				</div>
			</div>
		);
	}
}
export default ViewStudents;