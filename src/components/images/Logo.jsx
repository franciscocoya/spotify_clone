import LogoImg from '@/images/logo.svg';

export default function Logo({ fill, width, extraStyle }) {
  return <LogoImg fill={fill ?? '#ffffff'} width={width} style={extraStyle} />;
}
