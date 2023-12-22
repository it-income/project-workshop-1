import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CircularProgress from "@mui/material/CircularProgress";
import NextLink from "next/link";

export const SideNav = ({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data: any;
}) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        height: "100vh",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
      PaperProps={{
        sx: {
          backgroundColor: "#ECF0F1",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        {isLoading ? (
          <Box display="flex" justifyContent="center" width={"100%"}>
            <CircularProgress sx={{ marginY: 2 }} />
          </Box>
        ) : (
          <List>
            {data &&
              Object.keys(data).map((placeName) => (
                <ListItem disablePadding key={placeName}>
                  <ListItemButton
                    component={NextLink}
                    href={`/places/${placeName}`}
                  >
                    <ListItemText primary={placeName} />
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
        )}
      </Box>
    </Drawer>
  );
};
