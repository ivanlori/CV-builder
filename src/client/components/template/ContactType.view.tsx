import React, { FC, ReactElement } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import IconView from '@components/Icon.view';

interface OwnProps {
  contact: string;
  label?: string;
  icon?: IconDefinition;
}

interface StyleProps {
  bold?: boolean;
}

type Props = OwnProps & StyleProps;

const Label = styled.span<StyleProps>`
  ${({ bold }) => (bold ? 'font-weight: bold' : '')};
  font-size: 12px;
`;

const iconStyle: CSSProperties = {
  marginLeft: '5px',
  fontSize: '12px'
}

const ContactType: FC<Props> = ({ contact, icon, label, bold }: Props): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      {
        contact &&
        <div>
          {label && t(label)}
          <Label bold={bold}>{contact}</Label>
          {icon && <IconView icon={icon} style={iconStyle} />}
        </div>
      }
    </>
  );
}

export default ContactType;
