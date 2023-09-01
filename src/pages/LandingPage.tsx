import { Box, Typography } from "@mui/material";
import Page from "components/Page";

const LandingPage = () => {
  return (
    <Page>
      <Box marginTop={10}>
        <Typography variant="h1" fontSize={64}>
          AL3C Art
        </Typography>
        <Typography variant="h6" fontSize={48} fontStyle="italic">
          Art Blocks Engine Template
        </Typography>
      </Box>
    </Page>
  );
};

export default LandingPage;
