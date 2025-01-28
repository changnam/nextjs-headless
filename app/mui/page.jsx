'use client'

// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { Button } from "@mui/material";

export default function Page() {
  return (
    <>
        <Button className="text-red-500" variant="text" color="secondary" >Text</Button>
        <Button variant="contained" color="primary">Contained</Button>
        <Button variant="outlined" color="primary">Outlined</Button>
        <p className="text-red-500">블라블라</p>
    </>
  );
}