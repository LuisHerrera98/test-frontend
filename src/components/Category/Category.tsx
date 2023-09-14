import React, { useState, useEffect } from "react";

const Category = () => {
  useEffect(() => {
    const url = window.location.href;
    const urlParams = new URLSearchParams(url.split("?")[1]);
    const categoryParam = urlParams.get("category");

    console.log(categoryParam);
  }, []);

  return <div>Category</div>;
};

export default Category;
