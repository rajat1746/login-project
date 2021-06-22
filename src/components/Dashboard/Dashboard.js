import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function Dashboard() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [data]);
  console.log(data);

  return (
    <div>
      <Container>
        <Row>
          {data?.map((el) => {
            return (
              <Col>
                <div
                  className="card"
                  style={{ width: "18rem", height: "8rem", margin: "0.1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{el.id}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {el.title}
                    </h6>
                    <p className="card-text">{el.completed}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
