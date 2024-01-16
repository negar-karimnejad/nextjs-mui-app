import MainMenu from "@/components/MainMenu";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box>
        <Typography variant="h4" marginBottom={5}>
          Let&apos;s Play🎮
        </Typography>
        <MainMenu />
      </Box>
    </Container>
  );
}
