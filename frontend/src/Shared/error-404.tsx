import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';

/**
 * Custom 404 error.
 * @returns {ReactJSXElement}
 */
function Error404() {
  return (
    <Alert severity="error">
      The page you are looking for does not exist{' '}
      <Link to="/"> Go back to dashboard</Link>!
    </Alert>
  );
}

export default Error404;
