import { useEffect, FC } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

const ScrollToTop: FC<RouteComponentProps> = ({ history }) => {
  useEffect(() => {
    const unsubscribe = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default withRouter(ScrollToTop);
