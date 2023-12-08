import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

function Cards() {
  const [users, setUsers] = useState([]);
  
  const getusers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
    console.log(setUsers);
  };
  useEffect(() => {
    getusers();
  }, []);
  return (
      <div className="container">
        <h1 className="text-center mt-5">Github Users</h1>
      <div className="row">
        {users.map((element) => {
          return (
            <div className="col-5 col-md-3 mt-5 card">
              <Card style={{ width: "12rem" }}>
                <Card.Img variant="top" src={element.avatar_url} />
                <Card.Body>
                  <Card.Title>{element.login}</Card.Title>
                  <Card.Text>Web Developer</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
}

export default Cards;
