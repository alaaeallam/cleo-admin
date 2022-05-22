import React from "react";

import useAsync from "../../hooks/useAsync";
import CategoryServices from "../../services/CategoryServices";

const Category = () => {
  const { data } = useAsync(CategoryServices.getAllCategory);

  return (
    <>
      {data.map((parent) => (
        <option key={parent._id} value={parent.category}>
          {parent.category}
        </option>
      ))}
    </>
  );
};

export default Category;
