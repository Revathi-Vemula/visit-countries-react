import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161624;
  height: 110%;
  width: 100vw;
  padding: 20px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Consolas';
`

export const AllCountriesTable = styled.ul`
  list-style-type: none;
  padding-left: 0;
  height: 300px;
  overflow-y: scroll;
  width: 95vw;
  border: solid 1px #334155;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  background-color: #1f1f2f;
`
export const VisitCountriesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 98vw;
  list-style-type: none;
  padding-left: 0;
`
export const NoCountriesView = styled.p`
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: Center;
  font-family: 'COnsolas';
  height: 200px;
  width: 100vw;
`
