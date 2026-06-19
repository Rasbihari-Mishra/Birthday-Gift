import { Button } from "@mui/material";

export default function NeonButton(props: any) {
  return (
    <Button
      variant="contained"
      {...props}
      sx={{
        px: 5,
        py: 2,
        borderRadius: 10,
        background:
          "linear-gradient(45deg,#ff69b4,#ff1493)",
        boxShadow:
          "0px 0px 40px hotpink",
        "&:hover": {
          boxShadow:
            "0px 0px 60px hotpink"
        }
      }}
    />
  );
}