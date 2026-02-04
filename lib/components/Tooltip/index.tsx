import classNames from '../../utils/classNames';
import css from './index.module.scss';
import type { TooltipProps } from './index.types';

const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <div className={css.container}>
      {children}
      <div className={classNames('fm-tooltip', css.floater)}>
        <div className={css.inner}>{text}</div>
      </div>
    </div>
  );
};

export default Tooltip;
