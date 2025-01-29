'use client';

import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { amber, grey } from '@mui/material/colors';
import { CssBaseline, Button, useMediaQuery } from '@mui/material';

export default function MaterialMode() {
  // const mode = useMediaQuery('(prefers-color-scheme: dark)') ?
  //   'dark' : 'light';

  // 현재 모드를 관리하는 State
  const [mode, setMode] = useState('light');
  // State 값 mode를 light⇔dark으로 반전
  const toggleMode = () => setMode(prev =>
    prev === 'light' ? 'dark' : 'light'
  );
  // 테마 정의
  const theme = createTheme({
    palette: {
      mode,
      // mode 값에 따라 테마 전환
      ...(mode === 'light'
      // 라이트 모드에서 사용하는 팔레트
      ? {
          primary: amber,
        }
      // 다크 모드에서 사용하는 팔레트     
      : {
        primary: {
          main: grey[500],
          contrastText: '#fff'
        },
        background: {
          default: grey[900],
          paper: grey[900],
        },
      }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained" onClick={toggleMode}>
        Mode {mode}
      </Button>
    </ThemeProvider>
  );
}



// import { useState } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { amber, grey } from '@mui/material/colors';
// import { CssBaseline, Button, useMediaQuery } from '@mui/material';

// export default function MaterialMode() {
//   const mode = useMediaQuery('(prefers-color-scheme: dark)') ?
//     'dark' : 'light';

//   // 테마 정의
//   const theme = createTheme({
//     palette: {
//       mode,
//       // mode 값에 따라 테마 전환
//       ...(mode === 'light'
//       // 라이트 모드에서 사용하는 팔레트
//       ? {
//           primary: amber,
//         }
//       // 다크 모드에서 사용하는 팔레트     
//       : {
//         primary: {
//           main: grey[500],
//           contrastText: '#fff'
//         },
//         background: {
//           default: grey[900],
//           paper: grey[900],
//         },
//       }),
//     },
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Button variant="contained">
//         Mode {mode}
//       </Button>
//     </ThemeProvider>
//   );
// }