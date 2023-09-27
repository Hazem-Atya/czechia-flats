/* eslint-disable no-undef */
import Typography from '@mui/material/Typography';

interface ValidatorErrorProps {
  isTouched: boolean | undefined;
  error: any;
  children: JSX.Element | JSX.Element[];
}
/**
 * this component define the generic structre of a form input.
 * @param {ValidatorErrorProps} props
 * @returns {ReactJSXElement}
 */
function FormInput(props: ValidatorErrorProps) {
  const { isTouched, error, children } = props;
  return (
    <>
      {children}
      {isTouched && error && (
        <Typography fontSize={12} color="red">
          {error}
        </Typography>
      )}
    </>
  );
}

export default FormInput;
