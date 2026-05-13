import PopoverContainer from './PopoverContainer';
import PopoverContent from './PopoverContent';
import { AiOutlineMore } from 'react-icons/ai';
import { useState } from 'react';

const Popover = ({
  onClick,
  Ico = AiOutlineMore,
  variant = 'primary',
  items = [],
  closeOnClick = true,
  size = 'md',
}) => {
  const [isActive, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!isActive);
  };
  return (
    <PopoverContainer
      Ico={Ico}
      variant={variant}
      items={items}
      isActive={isActive}
      toggleActive={toggleActive}
      closeOnClick={closeOnClick}
      size={size}
    >
      {items.map((i) => (
        <PopoverContent key={i.key} title={i.title} onClick={onClick} />
      ))}
    </PopoverContainer>
  );
};

export default Popover;
