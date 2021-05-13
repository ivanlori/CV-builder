import React, { ReactNode, useState } from 'react';
import { Dispatch } from 'redux';
import { useTranslation } from 'react-i18next';
import { addCourseAction } from '../../store/actions/Courses.action';
import SectionTitle from '../../components/SectionTitle';
import AddLink from '../../components/AddLink';
import Accordion from '../../components/accordion';
import CoursesView from './Courses.view';
import { useDispatch } from 'react-redux';
import useDataFromState from '../../utils/useDataFromState';

const coursesInitialData: Object = {
	course: '',
	institution: '',
	dateFrom: '',
	dateTo: ''
}

const Courses = () => {
	const [id, setId] = useState(0);
	const addCourse = useDispatch<Dispatch>();
	const items = useDataFromState('courses');
	const { t } = useTranslation();

	const addCourseItem = (): void => {
		setId(id + 1)

		addCourse(addCourseAction(id, coursesInitialData));
	}

	const getItems = (items: any): ReactNode => (
		items.map((el: any, index: number) => (
			<Accordion key={index} title={el.course}>
				<CoursesView id={index} />
			</Accordion>
		))
	)

	return (
		<div>
			<SectionTitle>{t('courses.title')}</SectionTitle>
			{getItems(items)}
			<AddLink onClick={() => addCourseItem}>
				{t('add.course')}
			</AddLink>
		</div>
	);
}

export default Courses;
