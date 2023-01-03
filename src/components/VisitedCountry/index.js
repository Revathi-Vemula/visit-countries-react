import {
  VisitedCountryItem,
  VisitedCountryImage,
  ControlsContainer,
  CountryName,
  RemoveButton,
} from './styledComponents'

const VisitedCountry = props => {
  const {visitedCountryDetails, removeCountryFromVisitedList} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onClickRemove = () => {
    removeCountryFromVisitedList(id)
  }

  return (
    <VisitedCountryItem>
      <VisitedCountryImage src={imageUrl} alt="thumbnail" />
      <ControlsContainer>
        <CountryName>{name}</CountryName>
        <RemoveButton type="button" onClick={onClickRemove}>
          Remove
        </RemoveButton>
      </ControlsContainer>
    </VisitedCountryItem>
  )
}

export default VisitedCountry
