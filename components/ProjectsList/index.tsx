import { useEffect } from "react";
import { Container, ListGroup, Pagination } from "react-bootstrap";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProjectsList = () => {
  const { data, error } = useSWR("api/db", fetcher);

  let active = 2;
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Container className="py-3 px-0 bg-white rounded shadow-sm">
      <Container style={{ color: "black" }}>
        <h4>Projects</h4>
      </Container>

      <ListGroup defaultActiveKey="#link1" variant="flush" className="bg-light">
        <ListGroup.Item action href="#link0" disabled>
          Project
        </ListGroup.Item>
        <ListGroup.Item action href="#link1">
          {data && data.projects[0].name}
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          {data && data.projects[1].name}
        </ListGroup.Item>
      </ListGroup>
      <div className="mx-5 my-3">
        <Pagination>
          <Pagination.Prev />
          {items}
          <Pagination.Next />
        </Pagination>
      </div>
    </Container>
  );
};

export default ProjectsList;
