import { Box, Typography } from "@mui/material";
import MinterSetPriceV5Interface from "components/MinterInterfaces/MinterSetPriceV5Interface";
import Page from "components/Page";

const MintPage = () => {
  const coreContractAddress = "0x730d0C5891e3682D0f8Bd0F2dd52ED10eaE90570";
  const mintContractAddress = "0x1F3DF1E177B419bC46705F8138809893497aAadF";
  const artistAddress = "0x4a8557FFC313a398904daE6e5561eE216a04602D";
  const scriptAspectRatio = 1.333;
  const projectId = "1";

  return (
    <Page>
      {
        <Box marginTop={10}>
          <Typography variant="h1" fontSize={64}>
            Mint
          </Typography>
          <MinterSetPriceV5Interface
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
