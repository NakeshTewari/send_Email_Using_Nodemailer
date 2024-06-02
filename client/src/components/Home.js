import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Home = () => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [files, setFiles] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    console.log("email: ", email, "text: ", text, "files: ", files);
    const data = new FormData();

    data.append("email", email);
    data.append("text", text);
    data.append("file", files[0]);

    try {
      const res = await fetch("http://localhost:4000/send", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: data,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mt-2">
        <div className="d-flex justify-content-center">
          <h2>send email with react and node.js </h2>
          <img
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="gmail photo"
            style={{ width: "50px" }}
          />
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <Form className="mt-2 col-lg" onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Enter text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter text"
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select File</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter text"
              onChange={(e) => setFiles(e.target.files)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Home;
