import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import { UserListTable } from "../UserListTable/UserListTable";
import { SearchUserButton } from "../SearchUserButton/SearchUserButton";
import { useListUser } from "../../context/ListUserContext";
import { listUsersInView } from "../../utils/listUsersInView";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { useCoordinates } from "../../context/CoordinatesContext";
import { Grid } from "@material-ui/core";

export const UserList = () => {
  const { inViewList, defaultList, setInViewList } = useListUser();
  const { width, height } = useWindowDimensions();
  const { xPosition, yPosition } = useCoordinates();
  useEffect(() => {
    const inViewUsers = listUsersInView(
      defaultList,
      xPosition,
      yPosition,
      width,
      height
    );
    setInViewList(inViewUsers);
  }, [width, height, xPosition, yPosition, defaultList]);

  return (
    <Container maxWidth="md">
            <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
      {inViewList.length ? (
        <Box component="div" my={4}>
          <Typography variant="h5" component="h1" gutterBottom>
            The following Users are currently visible based on position and
            screen size.
          </Typography>
          <UserListTable userList={inViewList} />
        </Box>
      ) : (
        <Box my={4}>
          <Typography component="p" gutterBottom>
            There are currently no users within view.
          </Typography>
        </Box>
      )}
      </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Typography gutterBottom>X-Position: {xPosition}</Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom>Y-Position: {yPosition}</Typography>
        </Grid>
      </Grid>
      <Grid item>
      <SearchUserButton />
      </Grid>
    </Container>
  );
};
