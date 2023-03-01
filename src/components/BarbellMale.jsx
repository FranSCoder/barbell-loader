import Box from './Box'
import data from '../barbell-data.json'
import Wrapper from '../assets/wrappers/Barbell'

const BarbellMale = () => {
  let {
    'sleeve-length': sleeveLength,
    'sleeve-width': sleeveWidth,
    'collar-length': collarLength,
    'collar-width': collarWidth,
    'first-knurl-length': firstKnurlLength,
    'knurl-mark-length': knurlMarkLength,
    'second-knurl-length': secondKnurlLength,
    'smooth-length': smoothLength,
    'middle-knurl-length': middleKnurlLength,
    'grip-width': gripWidth,
  } = data.dimensions.male

  sleeveLength *= 3
  sleeveWidth *= 3
  collarLength *= 3
  collarWidth *= 3
  firstKnurlLength *= 3
  knurlMarkLength *= 3
  secondKnurlLength *= 3
  smoothLength *= 3
  middleKnurlLength *= 3
  gripWidth *= 3

  const { light, dark } = data.colors

  return (
    <Wrapper>
      <Box background={light} height={sleeveWidth} width={sleeveLength} />
      <Box
        background={light}
        height={collarWidth}
        width={collarLength}
        borderLeft='1px solid black'
      />
      <Box background={dark} height={gripWidth} width={firstKnurlLength} />
      <Box background={light} height={gripWidth} width={knurlMarkLength} />
      <Box background={dark} height={gripWidth} width={secondKnurlLength} />
      <Box background={light} height={gripWidth} width={smoothLength} />
      <Box background={dark} height={gripWidth} width={middleKnurlLength} />
      <Box background={light} height={gripWidth} width={smoothLength} />
      <Box background={dark} height={gripWidth} width={secondKnurlLength} />
      <Box background={light} height={gripWidth} width={knurlMarkLength} />
      <Box background={dark} height={gripWidth} width={firstKnurlLength} />
      <Box
        background={light}
        height={collarWidth}
        width={collarLength}
        borderRight='1px solid black'
      />
      <Box background={light} height={sleeveWidth} width={sleeveLength} />
    </Wrapper>
  )
}
export default BarbellMale
