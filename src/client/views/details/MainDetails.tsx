import React, { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import * as action from '../../store/actions/Details.action';
import Photo from '../../components/photo';
import Input from '../../components/input';
import { Wrapper } from './Details.style';
import useDataFromState from '../../utils/useDataFromState';

const MainDetails: FC = (): ReactElement => {
	const {
		photo
	} = useDataFromState('details');
	const setJobTitle = useDispatch<Dispatch>();
	const setFirstName = useDispatch<Dispatch>();
	const setLastName = useDispatch<Dispatch>();
	const setPhone = useDispatch<Dispatch>();
	const setEmail = useDispatch<Dispatch>();
	const setPhoto = useDispatch<Dispatch>();

	return (
		<>
			<Photo
				onUpload={e => setPhoto(e)}
				imgUrl={photo}
			/>
			<Wrapper>
				<Input
					label="Job Title"
					onChange={e => setJobTitle(action.jobTitleAction(e.target.value))}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="First Name"
					onChange={e => setFirstName(action.firstnameAction(e.target.value))}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="Last Name"
					onChange={e => setLastName(action.lastnameAction(e.target.value))}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					label="Phone"
					onChange={e => setPhone(action.phoneAction(e.target.value))}
				/>
			</Wrapper>
			<Wrapper>
				<Input
					type="email"
					label="Email"
					onChange={e => setEmail(action.emailAction(e.target.value))}
				/>
			</Wrapper>
		</>
	)
}

export default MainDetails;
