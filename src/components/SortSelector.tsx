import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props{
    selectedSortOrder: string;
    onSelectedSortOrder: (order: string) => void
}

const SortSelector = ({selectedSortOrder, onSelectedSortOrder}: Props) => {
  const sortOrder = [
    {value:"", label: "Relavence"},
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "Added Date" },
    { value: "rating", label: "Popularity" },
    { value: "-metacritic", label: "Rating" },
  ];
  const selectedOrder = sortOrder.find(order => order.value === selectedSortOrder)
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By: {selectedOrder?.label || "Relavance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map(order => <MenuItem onClick={() => onSelectedSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
