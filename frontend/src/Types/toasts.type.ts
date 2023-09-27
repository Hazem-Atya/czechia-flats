export interface ToastPayload {
  message: string;
  severity: string;
  key: number;
}

export interface ToastState {
  toasts: ToastPayload[];
}
