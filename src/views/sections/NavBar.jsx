import {
    
    Drawer,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    Typography,
  } from "@mui/material";
  
  import Box from "@mui/material/Box";
  import MenuIcon from '@mui/icons-material/Menu';
  import React from "react";

  import { styled,useTheme  } from "@mui/material/styles";
  import useMediaQuery from "@mui/material/useMediaQuery";
 
  
  const MenuLink = styled(Link)(({ theme }) => ({
    textTransform: "uppercase",
    fontSize: "0.8em",
    letterSpacing: 0,
    fontWeight: 600,
    color: theme.palette.text.primary,
    textDecoration: "none",
    cursor: "pointer",
    padding: 2,
    ":hover": {
      textDecoration: "underline",
      color: theme.palette.secondary.main,
    },
  }));
  
  const navLinks = ["Home", "Contact Us", "Get a Quote!"].map(
    (item) => ({
      title: item,
      href: `#${item}`,
    })
  );
  
  export default function Navbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerVisible, setDrawerVisible] = React.useState(false);
  
    return (
       
      <Box >
        <Box
         
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexGrow: 1,
            margin: 1
       
          }}
        >
          <Link
            href="#"
            underline="none"
            color="text.primary"
            sx={{ display: "flex", alignItems: "center" }}
          >
            
        

            <Typography variant="h4" sx={{ ml: 1 }} fontWeight="600">
             M9 Insurance
            </Typography>
         
          </Link>
  
          {!matches && (
            <Box sx={{ display: "flex", alignItems: "center" ,  maxWidth: "none"}}>
              <Stack direction="row" spacing={2}>
                {navLinks.map((item, index) => {
                  return (
                    <Box
                      key={index}
                      
                      sx={{ listStyleType: "none" }}
                    >
                      <MenuLink
                        href={item.href}
                        underline="hover"
                        color="text.primary"
                        variant="body1"
                        sx={{ textTransform: "uppercase" }}
                      >
                        {item.title}
                      </MenuLink>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          )}
  
          <Drawer
            anchor="right"
            open={drawerVisible}
            onClose={() => {
              setDrawerVisible(false);
            }}
          >
            {navLinks.map((item, index) => {
              return (
                <List key={index}>
                  <ListItem disablePadding>
                    <ListItemButton
                      href={item.href}
                      component={Link}
                      sx={{ px: 6 , color: "orange"}}
                      
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant="body1"
                            color="initial"
                            sx={{ fontWeight: 600 }}
                          >
                            {item.title}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              );
            })}
          </Drawer>
  
          {matches && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                aria-label="menu"
                size="large"
                onClick={() => {
                  setDrawerVisible(true);
                }}
              >
                <MenuIcon sx={{ m: 0 }} />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
     
    );
  }