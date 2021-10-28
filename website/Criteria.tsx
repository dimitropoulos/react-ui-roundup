import { Chip, Typography } from '@mui/material';
import { map } from 'ramda';
import { FC } from 'react';

const Wrapper: FC = ({ children }) => <div style={{ margin: 16 }}>{children}</div>;
const Row: FC = ({ children }) => <div style={{ marginBottom: 8 }}>{children}</div>;

interface Props {
  items: [string, string][];
}

export const Criteria: FC<Props> = ({ items }) => (
  <Wrapper>
    <Typography sx={{ marginBottom: 1 }} variant="h6">Criteria</Typography>
    {map(([name, description]) => (
      <Row key={name} >
        <Chip label={name} size="small" sx={{ marginRight: 1 }} />
        <Typography variant="caption">{description}</Typography>
      </Row>
    ), items)}
  </Wrapper>
);
