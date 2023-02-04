import {
    
  Button,
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

  import { useTheme  } from "@mui/material/styles";
  import useMediaQuery from "@mui/material/useMediaQuery";
 import {useNavigate} from "react-router-dom"
  

  
  
  const linkList = [
    {
      text: "Home",
      route: "/",
    },
    {
      text: "Get a Quote!",
      route: "/form",
    },
    {
      text: "Contact Us",
      //route: "/",
    },
  ];
  
  export default function Navbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerVisible, setDrawerVisible] = React.useState(false);
   const navigate = useNavigate();
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
                {linkList.map((item, index) => {
                  return (
                    <Box
                      key={index}
                      
                      sx={{ listStyleType: "none" }}
                    >
                      
                      <Button
                        href={item.route}
                        onClick={item.text=== "Contact Us" ? () => window.location = 'mailto:m9insurance@outlook.com' : () => navigate(item.route)}
                        underline="hover"
                        color="text.primary"
                        variant="body1"
                        sx={{ textTransform: "uppercase" }}
                      >
                        {item.text}
                      </Button>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          )}
  {matches && (
          <Drawer
            anchor="right"
            open={drawerVisible}
            onClose={() => {
              setDrawerVisible(false);
            }}
          >
            {linkList.map((item, index) => {
              return (
                <List key={index}>
                  <ListItem disablePadding>
                    <ListItemButton
                     // href={item.href}
                     onClick={item.text === "Contact Us" ? () => window.location = 'mailto:m9insurance@outlook.com' : () => navigate(item.route) }
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
                            {item.text}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              );
            })}
            
          </Drawer>
          
   )}

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