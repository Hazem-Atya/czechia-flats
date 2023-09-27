import Box from "@mui/material/Box";
import { ReactNode } from "react";

interface FlexBoxProps {
  children?: ReactNode;
  sx?: any;
}
/**
 * Display 'flex'.
 * @returns {ReactJSXElemet}
 */
export function InlineBox({ children, sx }: FlexBoxProps) {
  return <Box sx={{ display: "flex", gap: 1, ...sx }}>{children}</Box>;
}

InlineBox.defaultProps = {
  children: <></>,
  sx: {},
};

/**
 * Display 'flex', justify 'start', align 'center'.
 * @returns {ReactJSXElemet}
 */
export function FlexStartAlignCenterBox({ children, sx }: FlexBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

FlexStartAlignCenterBox.defaultProps = {
  children: <></>,
  sx: {},
};

/**
 * Display 'flex', justify 'center', align 'center'.
 * @returns {ReactJSXElemet}
 */
export function FlexCenterAlignCenterBox({ children, sx }: FlexBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

FlexCenterAlignCenterBox.defaultProps = {
  children: <></>,
  sx: {},
};
/**
 * Display 'flex', justify 'center', align 'end'.
 * @returns {ReactJSXElemet}
 */
export function FlexCenterAlignEndBox({ children, sx }: FlexBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

FlexCenterAlignEndBox.defaultProps = {
  children: <></>,
  sx: {},
};
/**
 * Display 'flex', justify 'start', align 'end'.
 * @returns {ReactJSXElemet}
 */
export function FlexStartAlignEndBox({ children, sx }: FlexBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        gap: 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

FlexStartAlignEndBox.defaultProps = {
  children: <></>,
  sx: {},
};
/**
 * Display 'flex', justify 'space-between', align 'end'.
 * @returns {ReactJSXElemet}
 */
export function FlexBetweenAlignEndBox({ children, sx }: FlexBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

FlexBetweenAlignEndBox.defaultProps = {
  children: <></>,
  sx: {},
};
/**
 * Display 'flex', justify 'space-between', align 'center'.
 * @returns {ReactJSXElemet}
 */
export function FlexBetweenAlignCenterBox({ children, sx }: FlexBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

FlexBetweenAlignCenterBox.defaultProps = {
  children: <></>,
  sx: {},
};
