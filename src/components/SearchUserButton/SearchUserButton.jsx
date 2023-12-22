import { useState } from "react";
import Button from "@material-ui/core/Button";
import { SearchUserDialog } from "../SearchUserDialog/SearchUserDialog";

export const SearchUserButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsOpen(true)}
      >
        User List
      </Button>
      <SearchUserDialog
        isOpen={isOpen}
        onCancel={handleClose}
        onClose={handleClose}
      />
    </>
  );
};
