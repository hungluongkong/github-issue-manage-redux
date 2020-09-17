import React from 'react';
import styled from 'styled-components';

import * as color from '../../theme/color';
import * as metrics from '../../theme/metrics';
import { ButtonType, ButtonProps, ButtonSize } from '../../types';

/**
 * Get css style for each type of button.
 * @param type type of button (enum)
 */
const typeToColor = (type: ButtonType): string =>
  type === ButtonType.Primary
    ? `
      background: ${color.PRIMARY_COLOR};
      color: ${color.DEFAULT_COLOR};
    `
    : `
      background: ${color.DEFAULT_COLOR};
      color: ${color.PRIMARY_COLOR};
    `;

/**
 * Styling button by buttonSize
 * @param bSize size of button (enum)
 */
const sizeToSize = (bSize: ButtonSize): string =>
  bSize === ButtonSize.Small
    ? `
      line-height: ${metrics.ButtonSizing.small.lineHeight};
      padding: 3px 5px;
      font-size: ${metrics.FontSize.Small};
    `
    : // Style normal button here
      '';

const StyledButton = styled.button<{ bType: ButtonType; size: ButtonSize }>`
  display: inline-block;
  min-width: 101px;
  text-align: center;
  font-size: ${metrics.FontSize.Default};
  line-height: 20px;
  padding: 6px 10px;
  vertical-align: middle;
  border-radius: 4px;
  border: ${color.PRIMARY_COLOR} 1px solid;

  :hover {
    opacity: ${metrics.OPACITY.hover};
    box-shadow: 0 5px 15px ${color.SHADOW_BORDER};
    cursor: pointer;
  }

  ${(props: { bType: ButtonType }): string => typeToColor(props.bType)}
  ${(props: { size: ButtonSize }): string => sizeToSize(props.size)}
`;

const Button = ({
  type = ButtonType.Primary,
  size = ButtonSize.Normal,
  value = '',
  onClick = () => {},
}: ButtonProps): JSX.Element => (
  <StyledButton
    {...{ size, onClick }}
    // bType: button type
    bType={type}
  >
    {value}
  </StyledButton>
);

export default Button;
