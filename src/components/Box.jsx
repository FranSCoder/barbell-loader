import styled from 'styled-components'

const Box = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  z-index: ${(props) => props['z-index']};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom}px;
  position: ${(props) => props.position};
  background-color: ${(props) => props.backgroundColor};
  background: ${(props) => props.background};
  border-radius: ${(props) => props.borderRadius}px;
  border-top: ${(props) => props.borderTop};
  border-right: ${(props) => props.borderRight};
  border-bottom: ${(props) => props.borderBottom};
  border-left: ${(props) => props.borderLeft};
`

export default Box
