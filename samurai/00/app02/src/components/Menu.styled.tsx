import styled from "styled-components";

export const Menu = styled.nav`
ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 25px;
  
  li > a {
    color: white;
    
    &:hover {
      color: black;
    }
  }
  
  li + li {
    margin-left: 20px;
  }
}
`