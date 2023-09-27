/* eslint-disable no-undef */
import Paper from '@mui/material/Paper';

interface PaperProps {
  width?: string;
  height?: string;
  children: JSX.Element | JSX.Element[];
  sx?: any;
}
/**
 * This component define the white background on which every react component is renders.
 * @param {PaperProps} props
 * @returns {ReactJSXElement}
 */
function PaperComponent(props: PaperProps) {
  const { width, height, children, sx } = props;
  return (
    <Paper sx={{ width, height, p: 2, ...sx }} elevation={3}>
      {children}
    </Paper>
  );
}

PaperComponent.defaultProps = {
  width: '100%',
  height: '100%',
  sx: {},
};

export default PaperComponent;
