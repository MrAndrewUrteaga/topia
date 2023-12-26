import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { SearchUserDialog } from "../SearchUserDialog/SearchUserDialog";
import { Grid } from "@material-ui/core";

export const SearchUserButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <>
    <Grid        
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center">
      <Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsOpen(true)}
      >
        User List
      </Button>
      </Grid>
    </Grid>
      <SearchUserDialog
        isOpen={isOpen}
        onClose={handleClose}
      />
    </>
  );
};
