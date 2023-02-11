import styled from "styled-components";

const Color = styled.div`
  width: 20px;
  height: 22px;
  border-radius: 100%;
  background-color:${props => props.color};
`

export default Color;