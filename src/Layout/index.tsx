import Menu from '../components/Menu';

const Layout = ({children}: any) => {
    return (
      <>
  <Menu />
      {children}
      </>
        
    )
}

export default Layout