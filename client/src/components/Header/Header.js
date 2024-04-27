import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { redirect } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="static" sx={{ backgroundColor: "#d7ccc8" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={"div"}
            onClick={() => {
              redirect("/");
            }}
            sx={{ flexGrow: 1 }}
            style={{ cursor: "pointer" }}
          >
            My Company Portal
          </Typography>

          <Button
            variant="text"
            sx={{ textAlign: "center" }}
            startIcon={<Avatar alt="Avatar" src="/path/to/image.jpg" />}
          ></Button>
        </Toolbar>
      </AppBar>
      <Drawer>
        <List>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};
export default Header;
