import { HStack, Switch, useColorMode, Text } from '@chakra-ui/react'

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === "dark"}  onChange={toggleColorMode}/>
        <Text>Color mode switch</Text>
    </HStack>
  )
}

export default ColorModeSwitch