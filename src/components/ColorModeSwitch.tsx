import { HStack, Switch, useColorMode, Text } from '@chakra-ui/react'

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack>
        <Switch colorScheme='green' isChecked={colorMode === "dark"}  onChange={toggleColorMode}/>
        <Text whiteSpace="nowrap">Color mode switch</Text>
    </HStack>
  )
}

export default ColorModeSwitch