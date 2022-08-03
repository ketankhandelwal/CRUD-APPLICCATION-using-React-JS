import React, { useContext} from "react";
import useCount from "../CustomHooks/useCount";
import Heading from "./Heading";
import { UserList } from "./UserList";
import { context } from "../context/globalState";

const Home = () => {
  const { users } = useContext(context);
  const totalProps = users.length;
  useCount(totalProps);

  return (
    <>
      <Heading />
      <UserList />
    </>
  );
};

export default Home;
