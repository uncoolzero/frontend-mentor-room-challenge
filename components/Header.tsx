import Image from "next/image"
import { useEffect, useState } from "react"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuBG, setMenuBG] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    
    const handleScroll = () => {
    
    if (window.scrollY > 0) {
      setIsScrolled(true)
    }
    else {
      setIsScrolled(false)
    }

    }

    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }



  }, [])

  
  useEffect(() => {

    if (isScrolled)
    {
      if (menuOpen)
      {
        setMenuBG("bg-white lg:bg-transparent")
      }
      else
      {
        setMenuBG("bg-black/50 lg:bg-transparent")
      }
    }
    else
    {
      if (menuOpen)
      {
        setMenuBG("bg-white lg:bg-transparent")
      }
      else
      {
        setMenuBG("")
      }
    }

  }, [menuOpen, isScrolled])


  return (
      <header className={`sticky top-0 py-12 -mt-[8rem] z-30 transition-all ease-in-out lg:absolute lg:top-3 lg:left-10 lg:z-50 lg:mt-0 ${menuBG}`}>
          <div className="flex items-center justify-between px-6 z-40">
            <button onClick={() => setMenuOpen(true)} className={`justify-center items-center lg:hidden ${menuOpen === true ? "hidden" : "flex"}`}>
                <Image alt="Menu" src={`/icon-hamburger.svg`} height="17" width="21"/>
            </button>
            <button onClick={() => setMenuOpen(false)} className={`pl-0.5 justify-center items-center lg:hidden ${menuOpen === false ? "hidden" : "flex"}`}>
                <Image alt="Menu" src={`/icon-close.svg`} height="17" width="17"/>
            </button>
            <div className={`justify-center items-center ${menuOpen === true ? "hidden" : "flex"}`}>
                <Image alt="Room Logo" src={"/logo.svg"} height="15" width="64"/>
            </div>
            <nav className={`gap-x-6 font-semibold leading-none lg:flex lg:pl-16 lg:font-normal lg:text-[1.1rem] lg:text-white lg:gap-x-7 lg:text-xl ${menuOpen === true ? "flex" : "hidden"}`}>
                <button className={`transition-all ease-in-out underline underline-offset-8 decoration-2 decoration-transparent lg:hover:decoration-white`}>home</button>
                <button className={`transition-all ease-in-out underline underline-offset-8 decoration-2 decoration-transparent lg:hover:decoration-white`}>shop</button>
                <button className={`transition-all ease-in-out underline underline-offset-8 decoration-2 decoration-transparent lg:hover:decoration-white`}>about</button>
                <button className={`transition-all ease-in-out underline underline-offset-8 decoration-2 decoration-transparent lg:hover:decoration-white`}>contact</button>
            </nav>
            <div className={`w-[21px] ${menuOpen === true ? "hidden" : ""}`}/>
          </div>

          <div className={`bg-black w-[100vw] h-[100vh] bg-black/50 z-20 ${menuOpen === true ? "absolute top-[7rem]" : "hidden"}`} />
      </header> 
  )
}

export default Header