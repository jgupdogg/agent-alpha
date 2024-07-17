'use client';

import React, { memo } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const NavbarContainer = styled('div')({
  flexGrow: 1,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 10,
});

const NavLink = styled(Link)<{ isActive: boolean }>(({ theme, isActive }) => ({
  color: isActive ? 'var(--color-primary)' : 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  marginRight: theme.spacing(2),
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'Inter, sans-serif',
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '2px',
    bottom: 0,
    left: 0,
    backgroundColor: 'var(--color-primary)',
    visibility: 'hidden',
    transform: 'scaleX(0)',
    transition: 'all 0.3s ease-in-out',
  },
  '&:hover:before': {
    visibility: 'visible',
    transform: 'scaleX(1)',
  },
  '&:hover': {
    color: 'var(--color-primary)',
  },
  '&:active': {
    color: 'var(--color-primary)',
  },
}));

const Logo = styled(Image)({
  height: '60px',
  objectFit: 'contain',
});

const Navbar = memo(() => {
  Navbar.displayName = "Navbar";

  const pathname = usePathname();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <NavbarContainer>
        <AppBar position="fixed" color="transparent" elevation={0}>
          <Toolbar>
            <Box display="flex" alignItems="center" width="100%">
              <Link href="/" passHref>
                <Logo src="/agent_alpha_name.png" alt="Agent Alpha Logo" width={200} height={60} />
              </Link>
              <Box flexGrow={1} />
              <NavLink href="/about" isActive={pathname === '/about'}>About</NavLink>
              <NavLink href="/projects" isActive={pathname === '/projects'}>Projects</NavLink>
              <NavLink href="#contact" isActive={pathname === '/#contact'}>Contact</NavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </NavbarContainer>
    </motion.div>
  );
});

export default Navbar;
