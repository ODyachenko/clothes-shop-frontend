import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const CardSkelleton: FC = (props) => (
  <ContentLoader
    speed={2}
    width={285}
    height={474}
    viewBox="0 0 285 474"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="43" y="43" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="0" rx="16" ry="16" width="285" height="354" />
    <rect x="0" y="370" rx="0" ry="0" width="285" height="56" />
    <rect x="0" y="440" rx="0" ry="0" width="70" height="16" />
  </ContentLoader>
);

export default CardSkelleton;
