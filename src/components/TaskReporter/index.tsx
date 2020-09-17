import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { isEqualAllProps } from '../../helpers/propsHelper';

import * as color from '../../theme/color';
import * as metrics from '../../theme/metrics';
import { TaskReportType, TaskReportProps } from '../../types';

const Wrapper = styled.div<{ type: TaskReportType }>`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${color.POPUP_BORDER_COLOR};
  width: 500px;
  outline: 0;
  background: ${(props) =>
    props.type === TaskReportType.Success
      ? color.POPUP_BG_COLOR_SUCCESS
      : color.POPUP_BG_COLOR_WARNING};
`;

const PopupBody = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px 10px;
`;

const TaskReporter = ({
  content,
  date,
  type = TaskReportType.Success,
  timeoutMS = metrics.POPUP_TIMEOUT,
}: TaskReportProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Inform popup auto hide
    setTimeout(() => {
      setIsVisible(false);
    }, timeoutMS);
  }, [timeoutMS, date]);

  return (
    <Wrapper
      type={type}
      style={{ visibility: isVisible && content ? 'visible' : 'hidden' }}
    >
      <PopupBody>{content}</PopupBody>
    </Wrapper>
  );
};

export default React.memo(TaskReporter, isEqualAllProps);
