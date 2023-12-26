import React from "react";
import { ListUser } from '../../models/userList';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

interface Props {
  userList: ListUser[]
}

export const UserListTable = ({ userList }: Props) => {
  return (
    <TableContainer
      component={Paper}
    >
      <Table style={{ minWidth: 650 }} stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">UserName</TableCell>
            <TableCell align="center">Broadcaster</TableCell>
            <TableCell align="center">Distance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList?.map((user) => (
            <TableRow
              key={user.id}
            >
              <TableCell scope="row" align="center">
                {user.username}
              </TableCell>
              <TableCell align="center">
                {user.is_broadcaster ? (
                  <img src="/tele.png" alt="image" height={40} width={40} />
                ) : null}
              </TableCell>
              <TableCell align="center">{user.distance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
