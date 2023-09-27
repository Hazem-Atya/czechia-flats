import { useDispatch } from 'react-redux';
import { toast } from 'Slices/toast.slice';
import { INFO } from 'Constants';

/**
 * This hook handles the alerts dispatch
 * @returns {Function}
 */
export const useToast = () => {
  const dispatch = useDispatch();
  const toastFunc = (message: string, severity = INFO) => {
    dispatch(toast({ message, severity, key: 0 }));
  };
  return toastFunc;
};
