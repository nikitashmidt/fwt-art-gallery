import cn from 'classnames';

import './style.scss';

type GridProps = {
  children: React.ReactNode;
};

const Grid = ({ children }: GridProps) => (
  <ul className={cn('grid')}>{children}</ul>
);

export default Grid;
