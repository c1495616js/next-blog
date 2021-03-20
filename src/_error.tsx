import React from 'react';
import _Error, { ErrorProps } from 'next/error';
import { NextPageContext } from 'next';
import { Page, Error } from '@/components';

export default class extends _Error<ErrorProps> {
  static async getInitialProps({ res, err }: NextPageContext): Promise<ErrorProps> {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
  }

  render(): React.ReactElement {
    const { statusCode } = this.props;
    return (
      <Page title={`NextJS Boilerplate | ${statusCode || 'Unexpected error'}`} description="Unexpected error page">
        <Error>
          {statusCode
            ? `${statusCode} - An unexpected error occurred on the server`
            : 'An unexpected error occurred on the client'}
        </Error>
      </Page>
    );
  }
}
