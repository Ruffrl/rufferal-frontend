import { useRouteError } from 'react-router-dom';

type RouterErrorProps = {
  statusText: string | any;
  message: string | any;
};

export const ErrorPage = () => {
  const error = useRouteError() as RouterErrorProps;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
