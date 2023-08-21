import { useChat } from "usellm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Message } from "./components/Message";
import Spinner from "react-bootstrap/Spinner";
function App() {
  const { isLoading, messages, sendMessage, input, setInput } = useChat({
    serviceUrl: "https://usellm.org/api/llm",
    stream: true,
    initialMessages: [
      {
        role: "assistant",
        content:
          "I'm a chatbot powered by the ChatGPT API and developed using useLLM. Ask me anything!",
      },
    ],
  });

  return (
    <Container fluid>
      <Row>
        <h2 className='text-center' style={{ color: "white" }}>
          Clone Chatgpt
        </h2>
        <Col xl={2}></Col>
        <Col className='mt-5' xl={8}>
          <Card className='mb-5'>
            <Card.Body>
              <Card.Body>
                {messages.map((message, idx) => (
                  <div key={idx}>
                    <Message
                      message={message.content}
                      typeUser={message.role}
                    ></Message>
                    <br />
                  </div>
                ))}
                <br />
                <br />
                <br />
                {isLoading ? (
                  <Spinner size='sm' animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </Spinner>
                ) : (
                  ""
                )}
              </Card.Body>
              <InputGroup className='mb-3'>
                <Form.Control
                  placeholder='Type here any question'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      sendMessage();
                    }
                  }}
                />
                <Button
                  variant='success'
                  id='button-addon2'
                  onClick={sendMessage}
                >
                  Send
                </Button>
              </InputGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={2}></Col>
      </Row>
    </Container>
  );
}

export default App;
