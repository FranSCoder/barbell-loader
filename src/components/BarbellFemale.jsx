import Box from './Box'
import data from '../barbell-data.json'
import Wrapper from '../assets/wrappers/Barbell'

const BarbellFemale = () => {
  const {
    'sleeve-length': sleeveLength,
    'sleeve-width': sleeveWidth,
    'collar-length': collarLength,
    'collar-width': collarWidth,
    'first-knurl-length': firstKnurlLength,
    'knurl-mark-length': knurlMarkLength,
    'second-knurl-length': secondKnurlLength,
    'smooth-length': smoothLength,
    'grip-width': gripWidth,
  } = data.dimensions.female

  return (
    <Wrapper>
      <Box
        background={light}
        height={sleeveWidth * 3}
        width={sleeveLength * 3}
      />
      <Box
        background={light}
        height={collarWidth * 3}
        width={collarLength * 3}
        borderLeft='1px solid black'
      />
      <Box
        background={dark}
        height={gripWidth * 3}
        width={firstKnurlLength * 3}
      />
      <Box
        background={light}
        height={gripWidth * 3}
        width={knurlMarkLength * 3}
      />
      <Box
        background={dark}
        height={gripWidth * 3}
        width={secondKnurlLength * 3}
      />
      <Box background={light} height={gripWidth * 3} width={smoothLength * 3} />
      <Box
        background={dark}
        height={gripWidth * 3}
        width={secondKnurlLength * 3}
      />
      <Box
        background={light}
        height={gripWidth * 3}
        width={knurlMarkLength * 3}
      />
      <Box
        background={dark}
        height={gripWidth * 3}
        width={firstKnurlLength * 3}
      />
      <Box
        background={light}
        height={collarWidth * 3}
        width={collarLength * 3}
        borderRight='1px solid black'
      />
      <Box
        background={light}
        height={sleeveWidth * 3}
        width={sleeveLength * 3}
      />
    </Wrapper>
  )
}
export default BarbellFemale
