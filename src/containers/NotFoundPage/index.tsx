import React, { FC } from "react";

import "./NotFoundPage.css";

const NotFound: FC = () => {
  return (
    <div className="not-found">
      <img src={"/not_found.png"} alt="not-found" />
    </div>
  );
};

export default NotFound;
