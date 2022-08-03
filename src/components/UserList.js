import React, { useContext } from "react";
import { context } from "../context/globalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const UserList = () => {
  const { users, removeUser } = useContext(context);

  return (
    <ListGroup className="mt-4">
      {users.length > 0 ? (
        <>
          {users.map((user) => (
            <ListGroupItem className="d-flex" key={user.id}>
              <strong>{user.name}</strong>
              <strong>{user.contact}</strong>
              <div className="ml-auto">
                <Link
                  color="warning"
                  className="btn btn-warning mr-1"
                  to={`/edit/${user.id}`}
                >
                  Edit
                </Link>

                <Button onClick={() => removeUser(user.id)} color="danger">
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No Users</h4>
      )}
    </ListGroup>
  );
};
