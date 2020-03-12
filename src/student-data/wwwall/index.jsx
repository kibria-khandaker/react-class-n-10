import React from 'react';
import './index.css';


// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
class StudentForm extends React.Component{
	state={
		sid:'',
		name:'',
		dept:'',
		agree:false //true , false
	};
	handleChange=e=>{
		 this.setState({
		 	[e.target.name]:e.target.value
		 }); 
	};
	render(){
		return (  
				<div className='container'>
				<div className='row'>
				<div className='col-md-10 offset-md-1'>
					<h3 className='text-info text-center mt-4'>React student information Form</h3>
					<hr/>


<div>
	<div className='form-row'>
		<div className='form-group col-md-2'>
			<label htmlFor='inputId'>ID</label>
			<input 
				type='number' className='form-control' 
				name='sid'
				value={this.state.sid} 
				onChange={this.handleChange}
			/>
				{this.state.sid && <p className='p-1 mt-2 bg-light text-dark text-left'>My ID is: <br/>{this.state.sid}</p>}

		</div>
		<div className='form-group col-md-4'>
			<label htmlFor='inputDepartment'>Department</label>
			<select
				className='form-control' 
				name='dept'
				value={this.state.dept} 
				onChange={this.handleChange}
			>
				<option>Choose...</option>
				<option>English</option>
				<option>Math</option>
				<option>Bangla</option>
				<option>Physics</option>
			</select>
				{this.state.dept && <p className='p-1 mt-2 bg-light text-dark text-left'>My Department is: <br/>{this.state.dept}</p>}
		</div>
				<div className='form-group col-md-6'>
			<label htmlFor='inputName'>Name</label>
			<input 
				type='text' className='form-control' 
				name='name'
				value={this.state.name} 
				onChange={this.handleChange}
			/>
				{this.state.name && <p className='p-1 mt-2 bg-light text-dark text-left'>My Name is: <br/> {this.state.name}</p>}
		</div>
	</div>
	<div className='form-group'>

		<div className='custom-control custom-checkbox'>
		  <input
		   		type='checkbox' className='custom-control-input' id='customCheck1'
				name='agree'
				checked={this.state.agree}
				onChange={e=>this.setState({agree:e.target.checked})}
			/>
			<label className='custom-control-label' htmlFor='customCheck1'>i am agree  with your terms and policy</label>
		</div>

	</div>
	<button 
		className= {`${!this.state.agree ? 'showButton' : 'btn btn-dark'}`}
		disabled={!this.state.agree}
		onClick={()=>console.log(this.state)}
	>Show Data
	</button><br/>

	{/*<button type='submit' className='btn btn-dark'>Submit</button>*/}
</div>
	
					

















<hr/>
<h5 className='p-2 mb-2 bg-info text-white text-center'>Student list</h5>


<ul className='list-group'>
  <li className='list-group-item bg-light text-dark mb-2 mt-2 border-0'>
  	<span className='itemId'>01 </span> 
  	<span className='itemDept'>Physics </span>
  	<span className='itemName'>Kibria khandaker </span> 
	<button type='button' className='btn btn-danger float-right ml-1'>Delete</button>
	<button type='button' className='btn btn-warning float-right ml-1'>Edit</button>
  </li>
  <li className='list-group-item bg-light text-dark mb-2 mt-2 border-0'>Cras justo odio
	<button type='button' className='btn btn-danger float-right ml-1'>Delete</button>
	<button type='button' className='btn btn-warning float-right ml-1'>Edit</button>
  </li>
  <li className='list-group-item bg-light text-dark mb-2 mt-2 border-0'>Cras justo odio
	<button type='button' className='btn btn-danger float-right ml-1'>Delete</button>
	<button type='button' className='btn btn-warning float-right ml-1'>Edit</button>
  </li>
  <li className='list-group-item bg-light text-dark mb-2 mt-2 border-0'>Cras justo odio
	<button type='button' className='btn btn-danger float-right ml-1'>Delete</button>
	<button type='button' className='btn btn-warning float-right ml-1'>Edit</button>
  </li>
  <li className='list-group-item bg-light text-dark mb-2 mt-2 border-0'>Cras justo odio
	<button type='button' className='btn btn-danger float-right ml-1'>Delete</button>
	<button type='button' className='btn btn-warning float-right ml-1'>Edit</button>
  </li>
  <li className='list-group-item bg-light text-dark mb-2 mt-2 border-0'>Cras justo odio
	<button type='button' className='btn btn-danger float-right ml-1'>Delete</button>
	<button type='button' className='btn btn-warning float-right ml-1'>Edit</button>
  </li>
  <li className='list-group-item bg-light text-dark mb-2 mt-2 border-0'>Cras justo odio
	<button type='button' className='btn btn-danger float-right ml-1'>Delete</button>
	<button type='button' className='btn btn-warning float-right ml-1'>Edit</button>
  </li>
  <li className='list-group-item bg-light text-dark mb-2 mt-2 border-0'>Cras justo odio
	<button type='button' className='btn btn-danger float-right ml-1'>Delete</button>
	<button type='button' className='btn btn-warning float-right ml-1'>Edit</button>
  </li>

</ul>


				</div>
				</div>
				</div>
			);
		}
	}
export default StudentForm;