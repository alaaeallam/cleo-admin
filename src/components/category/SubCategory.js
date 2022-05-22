import React from "react";

import useAsync from "../../hooks/useAsync";
import CategoryServices from "../../services/CategoryServices";

const SubCategory = () => {
  const { data } = useAsync(CategoryServices.getAllCategory);

  return (
    <>
      {data.map((parent) => (
        <option key={parent._id} value={parent.sub}>
          {parent.sub}
        </option>
      ))}
    </>
  );
};

export default SubCategory;
