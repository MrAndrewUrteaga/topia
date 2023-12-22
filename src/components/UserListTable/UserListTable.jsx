import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useListUser } from "../../context/ListUserContext";

export const UserListTable = ({ userList }) => {
  const { defaultList } = useListUser();
  return (
    <TableContainer
      component={Paper}
      style={{ maxHeight: 200, minHeight: 200 }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">UserName</TableCell>
            <TableCell align="center">Broadcaster</TableCell>
            <TableCell align="center">X-cord.</TableCell>
            <TableCell align="center">Y-cord.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList?.map((user) => (
            <TableRow
              key={defaultList[user].id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{defaultList[user].id}</TableCell>
              <TableCell scope="row" align="center">
                {defaultList[user].username}
              </TableCell>
              <TableCell align="center">
                {defaultList[user].is_broadcaster ? (
                  <img src="/tele.png" alt="image" height={40} width={40} />
                ) : null}
              </TableCell>
              <TableCell align="center">{defaultList[user].x}</TableCell>
              <TableCell align="center">{defaultList[user].y}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
