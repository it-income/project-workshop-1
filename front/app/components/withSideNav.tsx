"use client";
import { FC, PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { SideNav } from "@/app/components/sideNav";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";

export const WithSideNav: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: 10000, bgcolor: "#cfb977" }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Тональность отзывов
          </Typography>
        </Toolbar>
      </AppBar>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  </ThemeProvider>
);
