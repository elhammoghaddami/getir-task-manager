import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice';
import { FaTrashAlt } from 'react-icons/fa'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();
	const handleChangeStatusClick = () => {
		confirmAlert({
			title: 'Confirm To Change Status',
			message: 'Are you sure to do this?',
			buttons: [
				{
					label: 'Yes',
					onClick: () => dispatch(toggleCompleteAsync({ id: id, completed: !completed }))
				},
				{
					label: 'No',

				}
			]
		});

	};

	const handleDeleteClick = () => {
		confirmAlert({
			title: 'Confirm To Delete',
			message: 'Are you sure to do this?',
			buttons: [
				{
					label: 'Yes',
					onClick: () => dispatch(deleteTodoAsync({ id }))
				},
				{
					label: 'No',

				}
			]
		});
	};
	return (
		<div className={`task ${completed && 'completed'}`}>
			<h3>
				{title}
			</h3>
			<div className="actionBar">
				<div className="status">
					<span className="tit">
						Status:
			  </span>
					<button title="Change Status" onClick={handleChangeStatusClick} className="changeStatusBtn">
						{completed ? 'Completed' : 'In Progress'}
					</button>
				</div>
				<FaTrashAlt
					className="trashIcon"
					title="Delete Item"
					onClick={handleDeleteClick}
				/>
			</div>
		</div>


	)
};

export default TodoItem;
