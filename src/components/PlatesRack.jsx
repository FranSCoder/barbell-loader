import Box from './Box'
import FullRackWrapper from '../assets/wrappers/FullRack'
import RackPartWrapper from '../assets/wrappers/RackPart'
import data from '../barbell-data.json'

const PlatesRack = () => {
  const size = 21
  const { light } = data.colors
  return (
    <FullRackWrapper>
      {[...Array(size)].map((x, i) => {
        return (
          <RackPartWrapper key={i}>
            <Box width={12} height={4.5} background={light} z-index={1} />
            <Box
              width={4.5}
              height={60}
              background={light}
              z-index={1}
              borderRadius='2px 2px 0 0'
            />
            <Box width={12} height={4.5} background={light} z-index={1} />
          </RackPartWrapper>
        )
      })}
    </FullRackWrapper>
  )
}

export default PlatesRack
