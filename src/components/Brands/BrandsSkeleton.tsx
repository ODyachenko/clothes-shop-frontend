import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const BrandsSkeleton: FC = (props) => (
  <ContentLoader
    speed={2}
    width={285}
    height={186}
    viewBox="0 0 285 186"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="43" y="43" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="0" rx="16" ry="16" width="285" height="156" />
  </ContentLoader>
);

export default BrandsSkeleton;
