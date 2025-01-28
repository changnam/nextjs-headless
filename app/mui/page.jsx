import { Button } from "@mui/material";

export default async function Page() {
  return (
    <>
        <Button variant="text" color="primary">Text</Button>
        <Button variant="contained" color="primary">Contained</Button>
        <Button variant="outlined" color="primary">Outlined</Button>
    </>
  );
}