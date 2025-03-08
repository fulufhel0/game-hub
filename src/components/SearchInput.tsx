import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <InputGroup>
        <Input borderRadius={20} variant="filled" placeholder='Search Games...' />
        <InputRightElement children={<BsSearch />} />
    </InputGroup>
  )
}

export default SearchInput