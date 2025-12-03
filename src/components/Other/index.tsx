import type { OtherProps } from './index.types';

const Other = ({ onClick }: OtherProps) => {
  return (
    <div>
      <p>other</p>
      <button type="button" onClick={onClick}>
        test
      </button>
    </div>
  );
};

export default Other;
