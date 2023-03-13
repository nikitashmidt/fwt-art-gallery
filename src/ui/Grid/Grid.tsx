import cn from 'classnames';

import './style.scss';

interface IGridProps {
  children: React.ReactNode;
}

const Grid = ({ children }: IGridProps) => (
  <ul className={cn('grid')}>{children}</ul>
);

export default Grid;
