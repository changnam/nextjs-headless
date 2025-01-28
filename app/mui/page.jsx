'use client';

import { useState } from 'react';
import { Home, Mail, Info, AccountTree } from '@mui/icons-material';
import { Box, Button, Drawer, List, ListItem, ListItemButton,
  ListItemText, ListItemIcon } from '@mui/material';

// 표시용 메뉴 정보 준비
const menu = [
  { title: '홈', href: 'home.html', icon: Home },
  { title: 'Contact Us', href: 'contact.html', icon: Mail },
  { title: '회사 소개', href: 'company.html', icon: Info  },
  { title: '사이트맵', href: 'sitemap.html', icon: AccountTree },
];

export default function MaterialDrawer() {
  // 드로워 개폐를 위한 플래그
  const [show, setShow] = useState(false);
  // 버튼 클릭 시 호출되는 핸들러 (show를 반전)
  const handleDraw = () => setShow(!show);

  return (
    <>
    <Button onClick={handleDraw}>드로워</Button>
    <Drawer anchor="left" open={show}>
      <Box sx={{ height: '100vh' }} onClick={handleDraw}>
      <List>
      {/* 미리 준비된 배열을 메뉴로 확장 */}
      {menu.map(obj => {
        const Icon = obj.icon;
        return (
        <ListItem key={obj.title}>
          <ListItemButton href={obj.href}>
            <ListItemIcon><Icon /></ListItemIcon>
            <ListItemText primary={obj.title} />
          </ListItemButton>
        </ListItem>
        );
      })}
      </List>
      </Box>
    </Drawer>
    </>
  );
}