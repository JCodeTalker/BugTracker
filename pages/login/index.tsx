import { Form } from "react-bootstrap";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import user from "../../public/user.png";

export default function LoginPage() {
  return (
    <Container className="mx-auto my-2 bg-info text-light text-center p-5">
      <Row>
        <Col className="my-auto">
          <Image src={user} alt="abc" />
        </Col>
        <Col>
          <h1>Welcome!</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter Email Address..."
                className="rounded-pill"
                style={{ height: "9vh" }}
              />
              <Form.Text className="text-muted">
                We&apos;ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                className="rounded-pill"
                style={{ height: "9vh" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Remember Me when you look at the moon..."
                className="text-start"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              size="lg"
              style={{ width: "100%" }}
              className="rounded-pill"
            >
              Login
            </Button>
          </Form>
          <hr />
          <Button
            variant="secondary"
            className="rounded-pill d-block mx-auto m-3 d-flex"
            onClick={() => alert("Hi!")}
            style={{ width: "30vw", backgroundColor: "#ea4335" }}
          >
            <span className="mx-auto d-flex">
              <GoogleOutlined className="mt-1 me-1" />
              Login in with Google
            </span>
          </Button>

          <Button
            variant="secondary"
            className="rounded-pill d-block mx-auto m-3 d-flex"
            style={{ width: "30vw", backgroundColor: "#3b5998" }}
          >
            <span className="mx-auto d-flex">
              <FacebookOutlined className="mt-1 me-1" />
              Login in with Facebook
            </span>
          </Button>
          <hr />
          <p>
            <Link href="/">
              <a className="text-decoration-none">Forgot password?</a>
            </Link>
          </p>
          <p>
            <Link href="/home">
              <a className="text-decoration-none">Create an Account!</a>
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
