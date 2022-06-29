import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useSelector((store) => store.user);

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/home"} />
        );
      }}
    />
  );
};
export default Route;
