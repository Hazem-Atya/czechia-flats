import React from 'react';

/**
 * This hook defined a general structure to a controlled component state.
 * @param {boolean} initialState initial state of the controlled element
 * @returns {boolean, function, function, function}
 */
export const useToggle = (initialState: boolean) => {
  const [open, setOpen] = React.useState(initialState);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return { open, handleOpen, handleClose, handleToggle };
};
