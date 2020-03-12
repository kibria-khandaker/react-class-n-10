import React from 'react';

 function TableView({students,handleEdit,handleDelete}){
		return (
			<div className="my-4 text-left">
				<table className="table">
					<thead>
						<tr>
							<th className="text-left">Name</th>
							<th className="text-center">Department</th>
							<th className="text-center">ID</th>
							<th className="text-right">Actiom</th>
						</tr>
					</thead>
					<tbody>
						{students.map(student =>(
						<tr key={student.id}>
							<th className='text-uppercase text-left'>{student.name}</th>
							<td className='text-uppercase text-center font-weight-light'>{student.dept}</td>
							<td className='text-lowercase text-center font-weight-light'>{student.id}</td>
							<td className="text-right">
								<div  className='ml-auto'>
									<button type='button' className='btn btn-sm btn-warning' onClick={()=> handleEdit(student.id)}>Edit</button>
									<button type='button' className='btn btn-sm btn-danger ml-1' onClick={()=> handleDelete(student.id)} >Delete</button>
								</div>
							</td>
						</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
export default TableView;