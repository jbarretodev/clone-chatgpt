import ReactMarkdown from "react-markdown";
export const Message = ({ message, typeUser }) => {
  const userStyle = {
    backgroundColor: "#9ca1d8",
    float: "left",
    padding: "5px",
    borderRadius: "5px",
  };

  const assistantStyle = {
    backgroundColor: "#5FF379",
    float: "right",
    padding: "5px",
    borderRadius: "5px",
  };

  return (
    <div
      className='mb-5 mt-2'
      style={typeUser === "user" ? userStyle : assistantStyle}
    >
      <ReactMarkdown>{message}</ReactMarkdown>
    </div>
  );
};
