import React, { ReactElement } from 'react';
import { Divider, IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/system';

interface ConfigLayoutProps {
  title: string;
  icon: ReactElement;
  onClick?: () => {};
  disabled: boolean;
}
/**
 * This component generates the default structure of a configuration item 'title, divider, body'.
 * @param {ConfigLayoutProps} props
 * @returns {ReactJSXElement}
 */
function ConfigLayout(props: React.PropsWithChildren<ConfigLayoutProps>) {
  const { title, children, icon, onClick, disabled } = props;

  return (
    <Stack gap={1} mt={1} mb={1}>
      <Stack display="flex" flexDirection="column">
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2">{title}</Typography>
          {icon && (
            <IconButton size="small" onClick={onClick} disabled={disabled}>
              {icon}
            </IconButton>
          )}
        </Stack>

        <Divider />
      </Stack>
      {children}
    </Stack>
  );
}

ConfigLayout.defaultProps = {
  onClick: () => {},
};

export default ConfigLayout;
