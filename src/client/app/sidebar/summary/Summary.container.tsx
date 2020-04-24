import React, { Component, ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as action from './duck/Summary.actions';
import trans from '@client/i18n';
import { Container } from './Summary.style';
import TextEditor from '@components/text_editor/TextEditor.view';
import Title from '@components/Title.view';

interface OwnProps {
  currentStep: number;
}

interface StateProps {
  description: string;
}

interface DispatchProps {
  setSummary: (arg0: string) => void;
}

type Props = OwnProps & DispatchProps & StateProps;

class Summary extends Component<Props, {}> {

  onChange = (contentWithHTML: any) => {
    this.props.setSummary(contentWithHTML);
  }

  render(): ReactNode {
    const { currentStep, description } = this.props;

    if (currentStep !== 2) return null;

    return (
      <Container>
        <Title>{trans.t('summary_title')}</Title>
        <TextEditor
          value={description}
          onChange={this.onChange}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setSummary: (value: string) => {
    dispatch(action.setSummary(value));
  },
});

const mapStateToProps = (state: any) => {
  const { description } = state.summary;

  return {
    description
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
