import { Box, Typography } from "@mui/material";
import MinterSetPriceV5Interface from "components/MinterInterfaces/MinterSetPriceV5Interface";
import Page from "components/Page";
import {
  getConfiguredContractAddresses,
  getConfiguredMinterAddresses,
} from "utils/contractInfoHelper";

const MintPage = () => {
  const coreContractAddress = getConfiguredContractAddresses()
    .join('","')
    .toLowerCase();
  const minterAddress = getConfiguredMinterAddresses()
    .join('","')
    .toLowerCase();
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
            mintContractAddress={minterAddress}
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
