import LogoImg from '../../public/images/logo.svg';

export default function Logo({ fill, width }) {
  return <LogoImg fill={fill ?? '#ffffff'} width={width} />;
}
