import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function AuthProvider({ children }: Props) {
  return children;
}
