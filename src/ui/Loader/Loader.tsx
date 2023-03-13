import cn from 'classnames';

import './style.scss';

interface ILoaderProps {
  isDark: boolean;
}

// сомневаюсь, что наименования классов правильны,
// поделись мнением как можно было бы более кореектно их назвать
// возможо так - path__one \ path__first, path__two \ path__second
// также и с наименованиями анимаций ( dash, dash2, dash3 )

const Loader = ({ isDark }: ILoaderProps) => (
  <div className={cn('loader', { 'loader--dark': isDark })}>
    <svg className={cn('loader__svg')} viewBox='0 0 50 50'>
      <circle
        className={cn('path')}
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='5'
      />
    </svg>

    <svg className={cn('loader__svg')} viewBox='0 0 50 50'>
      <circle
        className={cn('path2')}
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='5'
      />
    </svg>

    <svg className={cn('loader__svg')} viewBox='0 0 50 50'>
      <circle
        className={cn('path3')}
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='5'
      />
    </svg>

    <svg className={cn('loader__svg')} viewBox='0 0 50 50'>
      <circle
        className={cn('path4')}
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='5'
      />
    </svg>
  </div>
);

export default Loader;
