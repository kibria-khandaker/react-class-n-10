import React from 'react';
import './index.css';
import shortid from 'short-id';

import StudentForm from './form';
import SearchAndFilter from './search/';
import ViewStudents from './views';
import students from './data';


const MAX_ITEM_PER_LOAD = 6
// jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
class StudentApp extends React.Component{

	state = {
		students:students, // it is for damy data or use it [], 
		editable:false,
		selectedStudent:null,
		searchTerm:'',
		filter:'',
		sort:{
			category:'name',
			type:'ascending'
		},
		loadedItem:6,
	};

	handleEdit=id=>{
		this.setState({
			editable:true,
			selectedStudent:id
		});
	};
	handleDelete=id=>{
		const students = this.state.students.filter(
			student => student.id !== id
		);
		this.setState({students});

		if (this.state.selectedStudent === id) {
			this.setState({
				editable:false,
				selectedStudent:null
			});
		};
	};

	createStudent=student=>{
		student.id = shortid.generate();
		const students = [student, ...this.state.students];
		this.setState({students});
	};
	updateStudent=({name,dept},id)=>{
		const{students}=this.state;
		const student = students.find(student => student.id ===id);
		student.name = name;
		student.dept = dept;

		this.setState({students});
	};

	hendleReset=()=>{
		this.setState({
			editable:false,
			selectedStudent:null
		});
	};

	hendleSearchTerm = searchTerm =>{
		this.setState({searchTerm});
	};

	hendlefilter = filter =>{
		this.setState({filter});
	};

	hendleSort = e =>{
		this.setState({
			sort:{
				...this.state.sort,
				[e.target.name]: e.target.value
			}
		});
	};


	//searche er jonno
	operateSearch = (students = [])=>{
		const {searchTerm}=this.state;
		return students.filter(student => 
			student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
			student.dept.toLowerCase().includes(searchTerm.toLowerCase()) ||
			student.id.toLowerCase().includes(searchTerm.toLowerCase())
		);
	};

	//Filter er jonno
	operateFilter = (students = [])=>{
		const {filter} = this.state
		if (filter) {
			return students.filter(student => student.dept === this.state.filter);
		}
		return students;
	};
	//sort by er jonno
	operateSort = (students = [])=>{
		const{sort:{category,type}} = this.state;

		const compare=(dataA, dataB)=>{
			if (dataA > dataB) {
					return 1;
			}else if(dataA < dataB){
				return -1;
			}else{
				return 0;
			}
		};

		return students.sort((studentA, studentB) => {
			if (type === 'ascending') {
				return compare(studentA[category],studentB[category]);
			}else if(type === 'descending'){
				return compare(studentB[category],studentA[category]);
			}else{
				return compare(studentA[category],studentB[category]);
			}
		});
	};

	render(){

		const {editable,selectedStudent,searchTerm,filter,sort,loadedItem}=this.state;

		let students = this.operateSort(this.state.students);
		students = students.slice(0, loadedItem);
		students = this.operateSearch(students);
		students = this.operateFilter(students);
		students = this.operateSort(students);

		let editableStudent = null
		if (editable) {
			editableStudent = students.find(
				student => student.id === selectedStudent
			);
		};
		
		//console.log(this.operateSort(this.state.students));
		
		return (  
				<div>
					{/*<p className='text-center mt-3'>React Students Information Collect Form Application</p>	*/}			
					<div className='pb-3 d-flex pt-4'>
						<StudentForm 
							editable={editable} 
							editableStudent={editableStudent} 
							createStudent={this.createStudent}
							updateStudent={this.updateStudent}
							hendleReset={this.hendleReset}
						/>
						<div className="vl"></div>
						<SearchAndFilter 
							searchTerm={searchTerm}
							filter={filter}
							sort={sort}
							hendleSearchTerm={this.hendleSearchTerm}
							hendlefilter={this.hendlefilter}
							hendleSort={this.hendleSort}
						/>
					</div>
					<div className='mt-4'>
						<ViewStudents 
							students={students} 
							handleEdit={this.handleEdit}
							handleDelete={this.handleDelete}
						/>
					</div>
					<div className='my-5 d-flex justify-content-center align-items-center'>
						<button 
							className='btn btn-sm btn-secondary'
							onClick={()=>{
								const {loadedItem, students} = this.state;
								if (loadedItem < students.length) {
									this.setState({
										loadedItem: loadedItem + MAX_ITEM_PER_LOAD
									});
								}
							}}
						>
							Load More
						</button>
					</div>
				</div>
			);
		}
	}
export default StudentApp;