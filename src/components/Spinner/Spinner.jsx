import { RotatingLines } from 'react-loader-spinner';
import { Chip } from './Spinner.styled';

export function Spinner() {
  return (
    <Chip>
      <RotatingLines
        strokeColor="#888"
        strokeWidth="5"
        animationDuration="0.75"
        width="70"
        visible={true}
      />
    </Chip>
  );
}
