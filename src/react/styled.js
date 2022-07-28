import styled from 'styled-components'

export const StyledButton = styled('button')`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 4px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  border: ${props => props.border};
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    background-color: ${props => props.hoverBackgroundColor};
    color: ${props => props.hoverColor};
    border: ${props => props.hoverBorder};
  }
`

export const HoverContainer = styled('div')`
  width: 100%;
  height: 100%;
  padding: ${props => props.padding};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(0,0,0,0.1);
  }
`
