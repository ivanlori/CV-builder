import React, { ReactNode, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import trans from '@client/i18n';
import { addCourseAction } from './duck/Courses.actions';
import Title from '@components/Title.view';
import AddLinkLabel from '@components/AddLinkLabel.view';
import Accordion from '@components/accordion/Accordion.view';
import { Container } from './Courses.style';
import CoursesView from './Courses.view';

interface DispatchProps {
  addCourse: (arg0: number, arg1: any) => void;
}

interface StateProps {
  items: any;
}

type Props = StateProps & DispatchProps;

interface State {
  id: number;
}

class Courses extends PureComponent<Props, State> {
  state = {
    id: 0
  };

  coursesInitialData = {
    course: '',
    institution: '',
    dateFrom: '',
    dateTo: ''
  }

  addCourseItem = (): void => {
    this.setState({
      id: this.state.id + 1
    });
    this.props.addCourse(this.state.id, this.coursesInitialData);
  };

  public render(): ReactNode {
    const { items } = this.props;

    const item = items.map((el: any) => {
      return (
        <Accordion key={el[0]} title={el[1].course}>
          <CoursesView id={el[0]} />
        </Accordion>
      )
    });

    return (
      <Container>
        <Title>{trans.t('courses_title')}</Title>
        {item}
        <AddLinkLabel onClick={this.addCourseItem}>
          {trans.t('add_course')}
        </AddLinkLabel>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  items: Object.entries(state.courses)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addCourse: (id, value) => {
    dispatch(addCourseAction(id, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
