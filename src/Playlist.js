import React, { useState } from "react";
export function SearchForm(props) {
  return (
    <>
      <label>
        Name:
        <input type="text" />
      </label>
      <input type="submit" value="Submit" />
    </>
  );
}