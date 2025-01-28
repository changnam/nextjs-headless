'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

export default function MaterialGrid() {
  return (
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={4}>
          <Item>size=4</Item>
        </Grid>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}


// import { Button } from '@mui/material';
// import Grid from '@mui/material/Unstable_Grid2';

// export default function MaterialGrid() {
//   return (
//   <Grid container spacing={2}>
//     <Grid xs={12} sm={9} md={6}>
//       <Button variant="contained" fullWidth>1</Button>
//     </Grid>
//     <Grid xs={12} sm={3} md={2}>
//       <Button variant="contained" fullWidth>2</Button>
//     </Grid>
//     <Grid xs={12} sm={4} md={3}>
//       <Button variant="contained" fullWidth>3</Button>
//     </Grid>
//     <Grid xs={12}>
//       <Button variant="contained" fullWidth>4</Button>
//     </Grid>
//   </Grid>
//   );
// }