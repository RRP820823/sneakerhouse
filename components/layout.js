
import Navbar from './navbar/index'
import Footer from './footer/index'
 
export default function Layout({ children }) {

  return (
    <>
      <Navbar links={data.links} />
      <main>{children}</main>
      <Footer />
    </>
  )
}