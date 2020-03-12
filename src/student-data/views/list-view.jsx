import React from 'react';

 function ListView({students,handleEdit,handleDelete}){
		return (

			<div className='row no-gutters ml-5'>
				{students.map(student =>(
				<div className='col-md-3 border border-info rounded text-left p-3 m-4' key={student.id}>
					<div>
						<h5 className='mb-3'>{student.name}</h5>
						<div className='text-capitalize font-weight-light d-block'>
							Department: <span className='bg-light pl-2 pr-2'>{student.dept}</span> 
						</div>
						<div className='text-capitalize font-weight-light d-block'>
							Student ID: <span className='bg-light pl-2 pr-2'>{student.id}</span> 
						</div>
					</div>
					<div  className='ml-auto mt-3 d-block'>
						<button type='button' className='btn btn-sm btn-warning' onClick={()=> handleEdit(student.id)} >Edit</button>
						<button type='button' className='btn btn-sm btn-danger ml-1' onClick={()=> handleDelete(student.id)} >Delete</button>
					</div>
				</div> 
				))}
			</div>
			
		);
	}
export default ListView;