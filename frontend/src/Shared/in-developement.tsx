import { Alert } from "@mui/material";

/**
 * Custom 'feature in developement'  alert.
 * @returns {ReactJSXElement}
 */
function InDevelopement() {

  return (
    <>
      <Alert severity="info">
        This feature is yet to be developed, sorry for the inconvenient!
      </Alert>
    </>
  );
}

export default InDevelopement;
