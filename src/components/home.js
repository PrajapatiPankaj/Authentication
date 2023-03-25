import React from "react";
import Button from "react-bootstrap/Button";
import { useUserAuth } from "../context/authContextApi";
import ListGroup from "react-bootstrap/ListGroup";

function Home() {
    const{user} = useUserAuth();
  return (
    <>
      <div className=" mt-5 section">
        <ListGroup>
          <ListGroup.Item>Hello welcome..! {user && user.email}</ListGroup.Item>
        </ListGroup><br />
        <Button variant="outline-success">Logout</Button>{" "}
      </div>
    </>
  );
}

export default Home;
