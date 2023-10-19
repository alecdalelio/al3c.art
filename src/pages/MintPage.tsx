import React, { useState, useEffect } from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import MinterSetPriceV5Interface from "components/MinterInterfaces/MinterSetPriceV5Interface";
import Page from "components/Page";
import {
  getConfiguredContractAddresses,
  getConfiguredMinterAddresses,
} from "utils/contractInfoHelper";
import { PROJECTS_PER_PAGE } from "config";
import { OrderDirection, Project } from "utils/types";
import ProjectPreview from "components/ProjectPreview";
import Loading from "components/Loading";
import useProjects from "hooks/useProjects";
import useCountProjects from "hooks/useCountProjects";

const MintPage = () => {
  const coreContractAddress = getConfiguredContractAddresses()
    .join('","')
    .toLowerCase();
  const minterAddress = getConfiguredMinterAddresses()
    .join('","')
    .toLowerCase();
  const artistAddress = "0x4a8557FFC313a398904daE6e5561eE216a04602D";

  // Fetch project data
  const { loading, error, data } = useProjects({
    skip: 0,
    first: PROJECTS_PER_PAGE,
    orderDirection: OrderDirection.DESC,
  });

  // Fetch the count of projects
  const countProjectsResponse = useCountProjects();
  const [countProjects, setCountProjects] = useState(0);

  useEffect(() => {
    if (countProjectsResponse.data?.projects?.length) {
      setCountProjects(countProjectsResponse.data?.projects?.length);
    }
  }, [countProjectsResponse.data?.projects?.length]);

  return (
    <Page>
      <Box marginTop={10}>
        <Typography variant="h1" fontSize={64}>
          Mint
        </Typography>
        <Box marginTop={4}>
          <Grid container spacing={20}>
            {loading ? (
              <Loading />
            ) : error ? (
              <Typography variant="h3" fontSize={24}>
                Error loading projects: {error.message}
              </Typography>
            ) : (
              data?.projects?.length > 0 &&
              data.projects.map((project: Project) => {
                // Extract the project number from the project ID
                const projectNumber = project.id.split("-")[1];

                return (
                  <Grid item key={project.id} xs={12} sm={6} md={4}>
                    <ProjectPreview project={project} />
                    <div>
                      <Typography variant="h2" fontSize={32}>
                        Project:{" "}
                        <Link href={`/project-page/${projectNumber}`}>
                          {project.name}
                        </Link>
                      </Typography>
                      <Typography variant="h3" fontSize={24}>
                        Artist: {project.artistName}
                      </Typography>
                      {/* Render the mintable interfaces for each project */}
                      <MinterSetPriceV5Interface
                        coreContractAddress={coreContractAddress}
                        mintContractAddress={minterAddress}
                        projectId={projectNumber}
                        artistAddress={artistAddress}
                        scriptAspectRatio={project.aspectRatio}
                      />
                    </div>
                  </Grid>
                );
              })
            )}
          </Grid>
        </Box>
      </Box>
    </Page>
  );
};

export default MintPage;
