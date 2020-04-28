import React, { useState } from "react";

export function Playlist() {
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