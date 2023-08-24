import imageLogo from '../images/header-logo.svg'

const Nav = () => {
  return (
    <header>
       <nav>
            <a href="/">
                <img src={imageLogo} alt="logo" />
            </a>
       </nav>
    </header>
  )
}

export default Nav