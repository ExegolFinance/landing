import React, { useEffect } from "react";
import { navigate } from "gatsby";

const NotFoundPage = () => {
  useEffect(() => {
    navigate("/");
  });
  return <div>Not found</div>;
};

export default NotFoundPage;
