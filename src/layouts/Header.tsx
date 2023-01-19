import { Component } from "react"
import { Container, Navbar, Image } from "react-bootstrap"
import logo from "public/TsLogo.png"
import styles from "src/styles/Header.module.css"

class Header extends Component<{}, { showMenu: boolean; closing: boolean }> {
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.state = {
      showMenu: false,
      closing: false,
    }
  }

  toggleMenu = () => {
    if (this.state.showMenu) {
      this.setState({
        showMenu: false,
        closing: true,
      })
      setTimeout(() => this.setState({ closing: false }), 300)
    } else {
      this.setState({ showMenu: true })
    }
  }

  render() {
    const menuStyles = [styles.hamburger]
    const rightRowStyles = ["align-top"]
    const collapseStyles = ["justify-content-end"]
    if (this.state.showMenu) {
      menuStyles.push(styles.toggle)
      rightRowStyles.push("order-0")
      collapseStyles.push("order-1")
    }
    if (this.state.closing) {
      rightRowStyles.push("order-0")
      collapseStyles.push("order-1")
    }
    return (
      <>
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
          <Container>
            <Navbar.Brand href="https://www.etsy.com/shop/TsWreathsAndThings" className="d-flex align-items-center" color="#0d1321">
              <Image
                src={`${logo.src}`}
                alt="T's Wreaths and Things Logo"
                width="80px"
                height="80px"
                className="d-inline-block align-top"
                roundedCircle={true}
              />
              <span className={styles.spacer}></span>T{`'`}s Wreaths and Things
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Header
