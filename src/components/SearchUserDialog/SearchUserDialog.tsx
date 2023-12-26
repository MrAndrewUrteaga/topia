import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogActions,
  Button,
  Grid,
} from "@material-ui/core";
import { useCoordinates } from "../../context/CoordinatesContext";
import { filterOutNonNumbers } from '../../utils/filterOutNonNumbers';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchUserDialog = ({ isOpen, onClose }: Props) => {
  const { xPosition, setXPosition, yPosition, setYPosition } = useCoordinates();
  const [newXPosition, setNewXPosition] = useState<string>(xPosition);
  const [newYPosition, setNewYPosition] = useState<string>(yPosition);

  const handleClose = () => {
    setXPosition(newXPosition);
    setYPosition(newYPosition);
    onClose();
  };

  const handleXChange = (input: string) => {
    const newValue = filterOutNonNumbers(input);
    setNewXPosition(newValue);
  }

  const handleYChange = (input: string) => {
    const newValue = filterOutNonNumbers(input);
    setNewYPosition(newValue);
  }

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Search</DialogTitle>
      <DialogContent>
        <Grid container direction="row" spacing={2} justifyContent='center'>
          <Grid item>
            <TextField
              autoFocus
              margin="dense"
              id="xCordinate"
              label="x-position"
              type="text"
              onChange={(e) => handleXChange(e.target.value)}
              value={newXPosition}
            />
          </Grid>
          <Grid item>
            <TextField
              margin="dense"
              id="y-position"
              label="y-position"
              type="text"
              onChange={(e) => handleYChange(e.target.value)}
              value={newYPosition}
              inputProps={{
                min: undefined,
                max: undefined,
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
