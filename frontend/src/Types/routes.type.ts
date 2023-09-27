import { ReactNode } from "react";

export interface RouteProps {
    path: string;
    name: string;
    element: ReactNode;
    icon: ReactNode;
  }