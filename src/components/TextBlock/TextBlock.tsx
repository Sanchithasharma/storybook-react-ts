import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

type TextBlockProps = {
  heading: string;
  label: string;
};

export default function TextBlock({ heading, label }: TextBlockProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 3,
          p: 4,
          width: "100%",
          height: "80%",
          textAlign: "center",
        },
      }}
    >
      <Paper elevation={3}>
        <Typography variant="h4" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {label}
        </Typography>
      </Paper>
    </Box>
  );
}
