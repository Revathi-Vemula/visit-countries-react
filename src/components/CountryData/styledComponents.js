import styled from 'styled-components'

export const CountryItem = styled.li`
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`

export const CountryName = styled.p`
  color: #f8fafc;
  margin-top: 10px;
`

export const Visited = styled.p`
  color: #cbd5e1;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 15px;
  text-align: center;
  padding-right: 10px;
`

export const VisitButton = styled.button`
  background-color: ${props => (props.isVisited ? 'transparent' : '#3b82f6')};
  width: 60px;
  height: 30px;
  border-style: none;
  border-radius: 4px;
  color: #ffffff;
`

export const Separator = styled.hr`
  border: solid 0.5px #334155;
  width: 100%;
`
