import React from 'react';
import styled from 'styled-components';
import * as metrics from '../theme/metrics';
import * as color from '../theme/color';

const StyledTable = styled.table`
  border-collapse: collapse;
  border: 1px solid black;
  font-size: ${metrics.FontSize.Code};
  font-family: ${metrics.FontFamily.Code};
  background-color: ${color.CODE_BG_COLOR};

  tr,
  td,
  th {
    border: 1px solid black;
    padding: 2px;
  }
`;

export const Code = styled.pre`
  font-family: ${metrics.FontFamily.Code};
  background-color: ${color.CODE_BG_COLOR};
  font-size: ${metrics.FontSize.Code};
`;

export const PreviewArea = styled.div`
  margin: 10px;
`;

export interface ComponentDetail {
  data: {
    name: string;
    type: string;
    isRequired?: boolean;
    default?: string;
    description?: string;
  }[];
}

export const DetailTable = (info: ComponentDetail): JSX.Element => (
  <StyledTable>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
    {info.data.map((data) => (
      <tr key={data.name}>
        <td>{data.name}</td>
        <td>{data.type}</td>
        <td>{data.isRequired ? ' true ' : ' - '}</td>
        <td>{data.default || '-'}</td>
        <td>{data.description || '-'}</td>
      </tr>
    ))}
  </StyledTable>
);
