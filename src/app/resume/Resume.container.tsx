import React, { PureComponent, ReactNode } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import i18n from '../../i18n';
import { showModalAction, selectTemplateAction } from '../../genericState/Generic.actions';

import Button from 'components/buttons/Button.view';
import Modal from 'components/modal/Modal.view';
import TemplateMiniature from 'components/TemplateMiniature';
import { Container, ActionsWrapper } from './Resume.style';
import ResumeView from './Resume.view';
import ResumeViewer from './Resume.preview';

interface StateProps {
  items: any;
  templateSelected: string | null;
}

interface DispatchProps {
  showModal: (arg0: boolean) => void;
  selectTemplate: (arg0: string) => void;
}

type Props = StateProps & DispatchProps;

class ResumeContainer extends PureComponent<Props, {}> {

  render(): ReactNode {
    const { showModal, items, selectTemplate, templateSelected } = this.props;

    const item = items.map((el: any) => {
      return <TemplateMiniature key={el[0]} id={el[0]} onClick={e => selectTemplate(e.currentTarget.id)}>{el[1]}</TemplateMiniature>
    });

    return (
      <Container>
        {
          templateSelected &&
          <ResumeView />
        }
        <ActionsWrapper>
          <Button type="button" color="secondary" onClick={() => showModal(true)}>
            {i18n.t('choose_template')}
          </Button>

          {templateSelected &&
            <Link to="/generate-pdf">
              {i18n.t('generate_pdf')}
            </Link>
          }
        </ActionsWrapper>
        <Modal title={i18n.t('choose_template')} >
          {item}
        </Modal>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showModal: (value: boolean) => {
    dispatch(showModalAction(value));
  },
  selectTemplate: (value: string) => {
    dispatch(selectTemplateAction(value));
  }
});

const mapStateToProps = (state: any) => {
  const templatesObject = Object.entries(state.generic.templatesAvailable);
  const templateSelected = state.generic.templateSelected;

  return {
    items: templatesObject,
    templateSelected
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeContainer);
