"use client";
import { ReactNode } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { SideNav } from "@/components/sideNav";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/components/theme";

export const WithSideNav = ({
  isLoading,
  data,
  children,
}: {
  isLoading: boolean;
  data: any;
  children?: ReactNode;
}) => (
  <ThemeProvider theme={theme}>
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: 10000, bgcolor: "#cfb977" }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Тональность отзывов
          </Typography>
        </Toolbar>
      </AppBar>
      <SideNav data={data} isLoading={isLoading} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  </ThemeProvider>
);
