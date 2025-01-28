'use client'

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";

export default function Page() {
    const font = css`
        text-transform: none;
    `;
  return (
    <>
        <Button variant="text" color="primary" css={font}>Text</Button>
        <Button variant="contained" color="primary">Contained</Button>
        <Button variant="outlined" color="primary">Outlined</Button>
    </>
  );
}