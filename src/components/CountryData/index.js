import {
  CountryItem,
  CountryName,
  Visited,
  VisitButton,
  Separator,
} from './styledComponents'

const CountryData = props => {
  const {countryData, changeCountryVisitStatus} = props
  const {id, name, isVisited} = countryData

  const onClickVisitCountry = () => {
    changeCountryVisitStatus(id)
  }

  return (
    <>
      <CountryItem>
        <CountryName>{name}</CountryName>
        {isVisited ? (
          <Visited>Visited</Visited>
        ) : (
          <VisitButton onClick={onClickVisitCountry}>Visit</VisitButton>
        )}
      </CountryItem>
      <Separator />
    </>
  )
}

export default CountryData
