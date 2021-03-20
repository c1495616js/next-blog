import React from 'react';

export interface IProps {
  className?: string;
  children: React.ReactNode;
}

export default function Error({ className, children }: IProps): React.ReactElement {
  return <div>{children}</div>;
}
