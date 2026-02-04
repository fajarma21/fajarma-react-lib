import classNames from '../../utils/classNames';
import css from './index.module.scss';
import type { TooltipProps } from './index.types';

const Tooltip = ({
  children,
  offset = { top: 0, left: 0 },
  text,
}: TooltipProps) => {
  return (
    <div className={css.container}>
      {children}
      <div
        className={classNames('fm-tooltip', css.floater)}
        style={{
          top: offset.top ? `${offset.top}px` : undefined,
          left: offset.left ? `${offset.left}px` : undefined,
        }}
      >
        <div className={css.inner}>{text}</div>
      </div>
    </div>
  );
};

export default Tooltip;
