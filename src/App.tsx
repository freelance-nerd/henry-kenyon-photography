function App() {

  return (
    <>
      <div className="max-w-screen-md">
        <Navbar/>
        <div className = "container columns-2 content-center">
            <img className="rotate-12 hover:rotate-0 m-10 shadow-2xl" src = "src/assets/wraa.jpg"/>
            <img className="rotate-6 hover:rotate-0 m-10 shadow-2xl" src = "src/assets/u15future.jpg"/>
            <a link="google.com">
              <img className="-rotate-12 hover:rotate-12 m-10 shadow 2xl" src = "src/assets/lots.jpg"/>
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
