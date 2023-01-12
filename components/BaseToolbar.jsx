import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import variables from '@styles/variables.module.scss';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

function UserDropdownMenu({ ...props }) {
  const intl = useIntl();
  return (
    <>
      <div id="user-dropdown-menu">
        <img src={props.profileImage} alt={`${intl.formatMessage({ id: "components.toptoolbar.profileImage_alt" })} ${props.username}`} />
        <span>{props.username}</span>
        <ChevronDownIcon width={20} />

      </div>
      <style jsx>{`
        #user-dropdown-menu{
          max-width: 150px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
          border-radius: 200px;
          background-color: ${variables.blackColorTransparent};
          padding: 2px 8px 2px 2px;
          cursor: pointer;
          transition: .1s ease-in background-color;
        }

        #user-dropdown-menu:hover{
          background-color: #282828;
        }

        #user-dropdown-menu > img{
          width: 28px;
          height: 28px;
          border-radius: 50px;
          fit-content: cover;
        }

        #user-dropdown-menu > span{
          font-size: 0.9rem;
        }
      `}</style>
    </>
  )
}

function NavigationArrow({ isDisabled, children, direction }) {
  const intl = useIntl();
  const router = useRouter();
  const navTitle = direction === 'back'
    ? intl.formatMessage({ id: "components.toptoolbar.arrow_back" })
    : intl.formatMessage({ id: "components.toptoolbar.arrow_forward" });

  const handleClick = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      if (direction === 'back') {
        router.back();
      } else if (direction === 'forward') {
        router.forward();
      }
    }
  }

  return (
    <>
      <div className={`navigation-toolbar-icon`} onClick={handleClick} title={navTitle}>
        {children}
      </div>
      <style jsx>{`
        .navigation-toolbar-icon{
          width: 32px;
          height: 32px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          background-color: ${variables.blackColorTransparent};
          border-radius: 50px;
          cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
          opacity: ${isDisabled ? .7 : 1};
        }
    `}</style>
    </>

  )
}

function ToolbarNavigation() {
  return (<>
    <div className='toolbar-nav-container'>
      <NavigationArrow direction='back'>
        <ChevronLeftIcon width={24} />
      </NavigationArrow>

      <NavigationArrow direction='forward' isDisabled={true}>
        <ChevronRightIcon width={24} />
      </NavigationArrow>
    </div>
    <style jsx>{`
        .toolbar-nav-container{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 15px;
        }
    `}</style>
  </>)
}

function BaseToolbar({ ...props }) {
  return (
    <>
      <div className="base-toolbar">
        <ToolbarNavigation />
        <UserDropdownMenu username="Kiko Coya" profileImage="https://i.scdn.co/image/ab6775700000ee85c1ac01a593871a43a801d95c" />
      </div>
      <style jsx>{`
        .base-toolbar{
          grid-area: top-toolbar;
          width: 100%;
          height: 80px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background-color: transparent;
          padding: 0 30px;
        }
        
      `}
      </style>
    </>
  )
}

export default BaseToolbar;