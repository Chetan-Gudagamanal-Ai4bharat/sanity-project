"use client"
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import Link from 'next/link';
// import Image from 'next/image';

// import '../globals.css'
// import { Inter } from 'next/font/google'
// import { getPages } from '@/sanity/sanity-utils'
// import page from '@/sanity/schemas/page-schema'
// import Logo from '../../assets/logo.svg'

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// async function ResponsiveAppBar({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const pages=await getPages()

//   return (
//     <AppBar position="static" sx={{ bgcolor: "white" }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <header className='flex items-center justify-between'>
//             <Link href='/' className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-bold font-lg'>
//               <Image src={Logo} alt="AI4BHARAT"></Image>
//               AI4BHARAT
//             </Link>
//             <div className='flex items-center gap-5 text-sm text-gray-600'>
//               {pages.map((page)=>(
//                 <Link key={page._id} href={`/${page.slug}`} className='hover:underline'>{page.title}</Link>
//               ))}
//             </div>
//           </header>
        
//         </Toolbar>
//       </Container>
//       <main className='py-20'>{children}</main>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;



import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import Image from 'next/image';
import Logo from '../../assets/logo.svg'
import Link from 'next/link';
import { getPages } from '@/sanity/sanity-utils'
import {Page} from '../../types/Page'

const pages = [];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [pages,setPages]=React.useState<string[]>([])

  const getMenuItems = async (): Promise<void> => {
    const menuItems= await getPages()
    console.log(menuItems)
    const tempMenuItems = ['Menu1', 'Menu2', 'Menu3'];
    setPages(tempMenuItems)
  }
  React.useEffect(()=>{
    getMenuItems()
  },[])

  // const pages=getPages()

  return (
    <AppBar elevation={0} position="fixed" sx={{backgroundColor:'#F2F3F7', boxShadow: 'none'}}>
      <Container maxWidth="xl" sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
        <Link href='/' className='bg-gradient-to-r from-orange-500 via-orange-700 to-red-500 bg-clip-text text-transparent text-bold'>

        
          <Image src={Logo} alt="AI4BHARAT"></Image>
          AI4BHARAT
        </Link>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:"#424242"}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className='items-center gap-5 text-gray-600'>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color:"#424242"}}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                settings
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      {/* </header> */}
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
