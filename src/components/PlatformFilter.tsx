import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from './hooks/usePlatforms'

interface Props{
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform|null
}

const PlatformFilter = ({onSelectPlatform, selectedPlatform}: Props) => {
    const { data, error } = usePlatforms();
    if(error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || "Platforms"}</MenuButton>
        <MenuList>
            {data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformFilter