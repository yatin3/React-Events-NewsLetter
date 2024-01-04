import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();

  let title = "An Error Occured!";
  let message = "Something Went Wrong!";

  if (error.status === 500) {
     message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "could not find resurces or pages";
  }

  return(
  <>
    <MainNavigation />
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  </>
  );
}

export default ErrorPage;
