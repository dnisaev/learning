import './App.css';
import styled from 'styled-components';

type PropsType = {
    display?: string,
    fontSize?: string,
    backgroundColor?: string,
    border?: string,
    borderColor?: string,
    borderRadius?: string,
    textColor?: string,
    cursor?: string,
    height?: string,
    width?: string
}

function App() {
    return (
        <div className="App">
            <Title>Sign up <span>for free</span></Title>

            <Form>
                <Field type={"text"} fontSize={"8px"} placeholder={"Enter your name"}/>
                <Field type={"email"} placeholder={"Enter your email"}/>
                <Field type={"password"} placeholder={"Enter your password"}/>
                <Label fontSize={"8px"}>
                    <Field type={"checkbox"} display={"inline"} width={"auto"}/>
                    <span>Согласен на обработку персональных данных.</span>
                </Label>
                <Field
                    type={"submit"}
                    value={"Send"}
                    width={"80px"}
                    height={"25px"}
                    fontSize={"12px"}
                    backgroundColor={"#e91e63"}
                    border={"none"}
                    borderRadius={"5px"}
                    textColor={"white"}
                    cursor={"pointer"}
                />
            </Form>
        </div>
    );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 32px;

  span {
    color: #e91e63;
  }
`;

const Form = styled.form`
  text-align: center;
  max-width: 300px;
`;

const Field = styled.input.attrs((props) => ({
    type: props.type || "text",
    value: props.value,
    placeholder: props.placeholder || "Enter your message",
    checked: props.checked
}))<PropsType>`
  
  display: ${props => props.display || "block"};
  padding: 5px 15px;
  margin: 10px auto;
  width: ${props => props.width || "200px"};
  height: ${props => props.height};
  font-size: ${props => props.fontSize || "8px"};
  background-color: ${props => props.backgroundColor || "none"};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  color: ${props => props.textColor};
  
  &:hover {
    cursor: ${props => props.cursor};
    background-color: transparent;
    color: #e91e63;
    border: 2px solid #e91e63;
  }
`;

const Label = styled.label<PropsType>`
  font-size: ${props => props.fontSize || "10px"};
  font-weight: 600;

  span {
    position: relative;
    margin-left: 5px;
    top: -3px;
  }
`