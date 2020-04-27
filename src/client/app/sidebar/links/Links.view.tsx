import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Input from '@components/input/Input.view';
import { Wrapper } from './Links.style';
import { setLabelAction, setLinkAction } from './duck/Links.actions';

interface OwnProps {
  id: number;
}

interface DispatchProps {
  setLink: (arg0: number, arg1: string) => void;
  setLabel: (arg0: number, arg1: string) => void;
}

interface StateProps {
  items: any;
}

type Props = OwnProps & DispatchProps & StateProps;

const LinksView: FC<Props> = ({ id, setLabel, setLink, items }: Props): ReactElement => {
  const { label, link } = items[id];

  return (
    <>
      <Wrapper>
        <Input
          type="text"
          label="Label"
          onChange={e => setLabel(id, e.target.value)}
          value={label}
        />
      </Wrapper>
      <Wrapper>
        <Input
          type="text"
          label="Link"
          onChange={e => setLink(id, e.target.value)}
          value={link}
        />
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state: any): StateProps => ({
  items: state.links
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setLabel: (id: number, value: string) => {
    dispatch(setLabelAction(id, value));
  },
  setLink: (id: number, value: string) => {
    dispatch(setLinkAction(id, value));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LinksView);
