import React from "react";
import ContentLoader from "react-content-loader";

const Loader = function () {
  return (
    <div className="loader">
      <ContentLoader speed={1} height={260} width={210}>
        <rect x={15} y={0} rx={30} ry={30} width={183} height={152} />
      </ContentLoader>
      <ContentLoader />
    </div>
  );
};

export default Loader;
