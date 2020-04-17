import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import trans from '@client/i18n';
import { addEmploymentAction } from './duck/Employment.actions';

import Title from '@components/Title.view';
import Subtitle from '@components/Subtitle.view';
import AddLinkLabel from '@components/AddLinkLabel.view';
import Accordion from '@components/accordion/Accordion.view';
import ErrorBoundary from '@components/ErrorBoundary';

import EmploymentView from './Employment.view';

interface OwnProps {
  currentStep: number;
};

interface DispatchProps {
  addEmployment: (arg0: number, arg1: any) => void;
}

interface StateProps {
  items: any;
}

type Props = OwnProps & DispatchProps & StateProps;

interface State {
  id: number;
};

const employmentInitialData = {
  jobTitle: null,
  employer: null,
  city: null,
  startDate: new Date(),
  endDate: new Date(),
  description: null
};

class Employment extends Component<Props, State> {
  state = {
    id: 0,
  };

  addEmploymentItem = (): void => {
    this.setState({
      id: this.state.id + 1
    });
    this.props.addEmployment(this.state.id, employmentInitialData);
  };

  public render(): ReactNode {
    const { currentStep, items } = this.props;

    if (currentStep !== 3) return null;

    const item = items.map((el: any) => {
      return (
        <Accordion key={el[0]} title={el[1].jobTitle}>
          <EmploymentView id={el[0]} />
        </Accordion>
      )
    });

    return (
      <ErrorBoundary>
        <div>
          <Title>{trans.t('employment_history')}</Title>
          <Subtitle>{trans.t('employment_history_subtitle')}</Subtitle>
          {item}
          <AddLinkLabel onClick={this.addEmploymentItem}>
            {trans.t('add_employment')}
          </AddLinkLabel>
        </div>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = (state: any) => ({
  items: Object.entries(state.employment)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addEmployment: (id, value) => {
    dispatch(addEmploymentAction(id, value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Employment);
