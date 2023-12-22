import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogActions,
  Button,
  Grid,
} from "@material-ui/core";
import { UserListTable } from "../UserListTable/UserListTable";
import { useListUser } from "../../context/ListUserContext";
import { useCoordinates } from "../../context/CoordinatesContext";

export const SearchUserDialog = ({ isOpen, onClose, onCancel }) => {
  const { inViewList } = useListUser();
  const { xPosition, setXPosition, yPosition, setYPosition } = useCoordinates();
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Search</DialogTitle>
      <DialogContent>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <TextField
              autoFocus
              defaultValue={800}
              margin="dense"
              id="xCordinate"
              label="x-position"
              type="number"
              onChange={(e) => setXPosition(e.target.value)}
              value={xPosition}
            />
          </Grid>
          <Grid item>
            <TextField
              defaultValue={400}
              margin="dense"
              id="y-position"
              label="y-position"
              type="number"
              onChange={(e) => setYPosition(e.target.value)}
              value={yPosition}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <UserListTable userList={inViewList} />
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
