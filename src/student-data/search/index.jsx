import React from 'react';
import {DEPT} from '../data/'

// function based react jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const SearchAndFilter = ({searchTerm,filter,sort,hendleSearchTerm,hendlefilter,hendleSort}) => {
	return(
		<div  className='col-md-5 col-sm-6 col-6'>
			<h5 className='font-weight-normal text-info'>Search And Filter: </h5>
			<input						
				type='text'
				className='form-control mt-3'
				placeholder='Enter search items'
				value={searchTerm}
				onChange={e => hendleSearchTerm(e.target.value)}						
			/>
			<select className='form-control mt-2' value={filter} onChange={e => hendlefilter(e.target.value)} >
				<option value='' >Select Department</option>
				{DEPT.map(dept=>(
					<option key={dept} value={dept}>
						{dept}
					</option>
				))}
			</select>
			<div className='d-flex mt-2'>
				<select name="category" className='form-control mr-2' value={sort.category} onChange={hendleSort}>
					<option value="name">Name</option>
					<option value="dept">Department</option>
				</select>
				<select name="type" className='form-control' value={sort.type} onChange={hendleSort}>
					<option value="ascending">Ascending</option>
					<option value="descending">Descending</option>
				</select>				
			</div>

		</div>
	);
};
export default SearchAndFilter;