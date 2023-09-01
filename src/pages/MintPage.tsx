import { Box, Typography } from "@mui/material";
import GenArt721MinterInterface from "components/MinterInterfaces/GenArt721MinterInterface";
import Page from "components/Page";

const MintPage = () => {
  const coreContractAddress = "0x8946B8E2BD0eB05C7b6b2eDd9E8826556000D9eC";
  const mintContractAddress = "0x86E63Bf8619446226BE43AD05eA9a42790775DdE";
  const projectId = "0";
  const artistAddress = "0x6E9cb366000470626Ee0b4103Dc9F77CcA19243B";
  const scriptAspectRatio = 1.33;

  return (
    <Page>
      {
        <Box marginTop={10}>
          <Typography variant="h1" fontSize={64}>
            Mint
          </Typography>
          <GenArt721MinterInterface
            coreContractAddress={coreContractAddress}
            mintContractAddress={mintContractAddress}
            projectId={projectId}
            artistAddress={artistAddress}
            scriptAspectRatio={scriptAspectRatio}
          />
        </Box>
      }
    </Page>
  );
};

export default MintPage;
