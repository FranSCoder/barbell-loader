import Box from './Box'
import data from '../plates-data.json'

const Plates = () => {
  const plateHeight = data['plate-diameter'] * 3
  const collection = ['25', '25', '20', '20', '15', '15', '10', '10', '5', '5']

  return (
    <>
      {collection.map((plate, index) => {
        const color = data.weights[plate].color
        const plateWidth = data.weights[plate].width * 3
        return (
          <Box
            background={color}
            key={index}
            width={plateWidth}
            height={plateHeight}
            bottom={0}
            left={`calc(50vw - 28.5px * 10 + 4.5px / 2 + ${index} * 28.5px + ${
              (24.5 - plateWidth) / 2
            }px)`}
            position='absolute'
            borderRadius={plateWidth > 5 ? '3' : '2'}
          />
        )
      })}
    </>
  )
}
export default Plates
