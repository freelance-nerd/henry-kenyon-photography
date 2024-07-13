function App() {

  return (
    <>
      <div className="max-w-screen-md">
        <Navbar/>
        <div>
            <img className="rotate-12 hover:rotate-0 m-10 shadow-2xl" src = "wraa.jpg"/>
            <img className="rotate-6 hover:rotate-0 m-10 shadow-2xl" src = "u15future.jpg"/>
            <a target="google.com">
              <img className="-rotate-12 hover:rotate-12 m-10 shadow 2xl" src = "lots.jpg"/>
            </a>
        </div>
        <Footer/>
      </div>
    </>
  )
}

function Navbar() {
  return <h1 className = "text-7xl font-label shadow-3xl">Henry Kenyon Photography</h1>
}

function Footer() {
  return (
    <div className="object-center">
      footer
    </div>
  )
}



export default App
