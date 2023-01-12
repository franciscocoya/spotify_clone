import {
  HeartIcon as HeartIconOutline, HomeIcon as HomeIconOutline,
  MagnifyingGlassIcon as MagnifyGlassIconOutline, PlusIcon as PlusIconOutline, Squares2X2Icon as Squares2X2IconOutline
} from '@heroicons/react/24/outline';
import { HeartIcon, HomeIcon, MagnifyingGlassIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/24/solid';

import variables from '@styles/variables.module.scss';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import Logo from './Images/Logo';

function MenuItem({ icon, activeIcon, name, linkPath }) {
  const router = useRouter();

  const isCurrentPage = router.asPath === linkPath;

  const handleRedirect = (e) => {
    e.preventDefault();
    router.push(linkPath);
  }

  return (
    <>
      <li onClick={handleRedirect}>
        {isCurrentPage ? activeIcon : icon}
        <span>{name}</span>
      </li>
      <style jsx>{`
        li{
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 20px;
          padding: 8px ${variables.sidebarPaddingRight} 8px ${variables.sidebarPaddingLeft};
          cursor: pointer;
        }

        li > span{
          color: ${isCurrentPage ? variables.whiteColor : variables.linkNotActiveColor}
        }

        li:hover > span{
          opacity: 1;
        }
      `}</style>
    </>
  )
}

function BaseSidebar({ ...props }) {
  const intl = useIntl();
  return (
    <>
      <nav id="app-navbar">
        <Logo width="150px" extraStyle={{ marginBottom: '20px', paddingLeft: variables.sidebarPaddingLeft }} />
        <ul>
          {/* Home */}
          <MenuItem name={intl.formatMessage({ id: "components.aside.home" })}
            icon={<HomeIconOutline className="menu-icon" />}
            activeIcon={<HomeIcon className="menu-icon" />}
            linkPath="/" />

          {/* Search */}
          <MenuItem name={intl.formatMessage({ id: "components.aside.search" })}
            icon={<MagnifyGlassIconOutline className="menu-icon" />}
            activeIcon={<MagnifyingGlassIcon className="menu-icon" />}
            linkPath="/search" />

          {/* Library */}
          <MenuItem name={intl.formatMessage({ id: "components.aside.library" })}
            icon={<Squares2X2IconOutline className="menu-icon" />}
            activeIcon={<Squares2X2Icon className="menu-icon" />}
            linkPath="/library" />

          <MenuItem name={intl.formatMessage({ id: "components.aside.createNewPlaylist" })}
            icon={<PlusIconOutline className="menu-icon" />}
            activeIcon={<PlusIcon className="menu-icon" />}
            linkPath="/playlist/new" />

          <MenuItem name={intl.formatMessage({ id: "components.aside.favourites" })}
            icon={<HeartIconOutline className="menu-icon" />}
            activeIcon={<HeartIcon className="menu-icon" />}
            linkPath="/favourites" />
        </ul>
      </nav>

      <style jsx>{`
        nav{
          grid-area: sidebar;
          min-height: 100%;
          height: 100%;
          min-width: 15%;
          width: 260px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 10px;
          background: black;
          padding-top: 40px;
        }

        ul{
          display: flex;
          flex-direction: column;
          gap: 10px;
          list-style-type: none;
        }

      `}</style>
    </>)
}

export default BaseSidebar