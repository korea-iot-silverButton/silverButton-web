import React from "react";
import { Box, Button } from "@mui/material";

export default function Navi() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={4} sx={{ paddingLeft: 4, paddingRight: 4, mt: 2, backgroundColor: "#eeeeee", py: 2 }}>
      <Button variant="text" sx={{ fontSize: 16 }}>Menu1</Button>
      <Button variant="text" sx={{ fontSize: 16 }}>Menu2</Button>
      <Button variant="text" sx={{ fontSize: 16 }}>Menu3</Button>
      <Button variant="text" sx={{ fontSize: 16 }}>Menu4</Button>
    </Box>
  );
}
