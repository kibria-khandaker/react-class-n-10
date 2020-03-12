import React from 'react';
import {Formik, Field,Form} from 'formik';

import {DEPT} from '../data/'

// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx 
class StudentForm extends React.Component{

	render(){
		const{ editable, editableStudent } = this.props;

		const initialValues = {name:'',dept:''};
		if (editable) {
			initialValues.name=editableStudent.name
			initialValues.dept=editableStudent.dept
		};

		return (  
				<div className="col-md-7 col-sm-6 col-6">
					{editable ? (
						<h5 className='font-weight-normal text-warning'>Update Student Informetion</h5>
						):(
						<h5 className='font-weight-normal text-info'> Create New Student Data</h5>
					)}

					<Formik 
						initialValues={initialValues}
						enableReinitialize={true}
						onSubmit={(values,formikBag)=>{
							if (editable) {
								this.props.updateStudent(values,editableStudent.id);
							} else {
								this.props.createStudent(values);
								formikBag.resetForm();
							}
						}}

					>
						{() => (
							<Form>
								<div className="row">
									<div className="col-md-12">
										
											<Field
												name='name'
												placeholder='Enter Name'
												className='form-control mt-2'
											/>
										
											<Field as='select' name='dept' className='form-control mt-2' >
												<option>Select Department</option>
												{DEPT.map(dept=>(
													<option key={dept} value={dept}>
														{dept}
													</option>
												))}
											</Field>
										
									</div>
								</div>
								<div className=''>
									<button type='submit' className='btn btn-dark btn-sm mt-3 mr-2 pl-5 pr-5 d-inline'>{editable ? 'Update':'Create'}</button>
									<button type='reset' onClick={this.props.hendleReset} className='btn btn-outline-danger btn-sm mt-3 mr-2 pl-5 pr-5 d-inline'>Reset</button>
								</div>

							</Form>
						)}
					</Formik>
					
				</div>
			);
		};
	};
export default StudentForm;