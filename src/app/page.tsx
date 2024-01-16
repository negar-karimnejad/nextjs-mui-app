import MainMenu from "@/components/MainMenu";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <MainMenu />
      </Box>
    </Container>
  );
}
