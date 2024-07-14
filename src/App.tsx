function App() {
  return (
    <div id="app" className="w-screen flex-col justify-center bg-verdant-bg">
      <div className="">
        <Navbar />
      </div>
      <div className="px-10 pb-10">
        <MainContent />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <div
      id="navbar"
      className="grid sm:grid-cols-4 w-full justify-center bg-verdant-bg p-10"
    >
      <div className="sm:col-span-3">
        <span className="text-verdant-fg text-4xl font-label text-center">
          Henry Kenyon
        </span>
      </div>
      <div className="flex flex-row ml-4 justify-end">
        <a
          href="https://www.instagram.com/more_henry_more_photos/"
          target="_blank"
          className="p-2 pr-4 hover:-rotate-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="22.5"
            viewBox="0 0 480 512"
            className="scale-150"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </a>
        <a
          href="mailto:henry@henrykenyonphotography.com"
          target="_blank"
          className="p-1 h-10 min-w-36 text-center font-label text-verdant-fg text-xl border-verdant-fg border-2 rounded-xl hover:text-verdant-blue hover:rotate-12"
        > Email Me!
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
            viewBox="0 0 512 512"
            className="scale-150"
          >
            <path
              fill="#402121"
              d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
            />
          </svg> */}
        </a>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div id="main" className="flex justify-center bg-verdant-bg mb-20">
      <div>
        <div className="text-2xl font-label text-verdant-red justify-center text-center m-5">
          Website Under Construction! Watch this space for October 2024.
        </div>
        <div className="grid md:grid-cols-2 justify-center mt-20">
          <div className="-rotate-3">
            <BreadAndRoses />
          </div>
          <div className="p-10 row-span-2 rotate-3 lg:rotate-6">
            <LotsAndLots />
          </div>
          <div className="p-10 -rotate-3 lg:-rotate-6">
            <Invisible />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BreadAndRoses() {
  return (
    <div className="flex flex-col justify-center">
      <a
        href="https://lincolnshirefoodpartnership.org/2021/10/26/bread-and-roses/"
        target="_blank"
      >
        <img
          src="https://raw.githubusercontent.com/freelance-nerd/henry-kenyon-photography/main/public/wraa.jpg"
          className="w-96 hover:-rotate-12 bg-verdant-bg drop-shadow-xl"
        />
      </a>
      <img
        className="h-48 mt-5 -rotate-90"
        src="https://raw.githubusercontent.com/freelance-nerd/henry-kenyon-photography/87e487f5acaa4524b814b79a8af944bace33a2cb/public/arrow.svg"
      />
      <p className="max-w-sm font-label text-verdant-fg text-xl">
        Bread & Roses- First screened in Lincoln Cathedral with a live choir in
        2021, my collaboration with the Greater Lincolnshire Food Partnership on
        small food systems was re-exhibited in Spring 2024 at the Museum of
        Lincolnshire Life.
      </p>
    </div>
  );
}

export function Invisible() {
  return (
    <div className="flex flex-col justify-center">
      <a>
        <img
          src="https://raw.githubusercontent.com/freelance-nerd/henry-kenyon-photography/main/public/u15future.jpg"
          className="hover:rotate-12 w-72 bg-verdant-bg drop-shadow-xl"
        />
      </a>
      <img
        className="h-48 mt-5 -rotate-90"
        src="https://raw.githubusercontent.com/freelance-nerd/henry-kenyon-photography/87e487f5acaa4524b814b79a8af944bace33a2cb/public/arrow.svg"
      />
      <p className="max-w-sm font-label text-verdant-fg text-xl">
        Since June 2023 I’ve been photographing with Unit 15 Creation Space,
        home of the Invisible Circus. This project is about the importance of
        space to make art in cities. More to come…
      </p>
    </div>
  );
}

export function LotsAndLots() {
  return (
    <div className="flex flex-col justify-center">
      <p className="max-w-sm font-label text-verdant-fg text-xl">
        My biggest exhibition in years, LOTS&LOTS&LOTS is a head-first dive into
        my photography from 2018-19, a time when I was trying to reinvent for
        myself what photography meant to me.
      </p>
      <p className="max-w-sm font-label mt-2 text-verdant-fg text-xl">
        This has been on show at All Is Joy in Soho from the 15th-16th of July
        2024.
      </p>
      <img
        className="h-48 mb-5 rotate-90"
        src="https://raw.githubusercontent.com/freelance-nerd/henry-kenyon-photography/87e487f5acaa4524b814b79a8af944bace33a2cb/public/arrow.svg"
      />
      <a>
        <img
          src="https://raw.githubusercontent.com/freelance-nerd/henry-kenyon-photography/main/public/lots.jpg"
          className="w-96 bg-verdant-bg drop-shadow-xl hover:rotate-12"
        />
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <div id="footer" className="grid justify-center bg-verdant-bg py-10">
      <span className="font-label text-center text-verdant-fg">
        © 2024-2025
        <a href="https://www.instagram.com/more_henry_more_photos/">
          <span className="text-verdant-blue">&nbsp;Henry Kenyon</span>
        </a>
        . All Rights Reserved.
      </span>
      <div className="font-label text-center text-verdant-fg">
        Website designed by{" "}
        <a href="https://www.instagram.com/freelance_nerd/" target="_blank">
          <span className="text-verdant-blue">@Freelance_nerd</span>
        </a>
      </div>
      <div className="grid justify-center">
        <img
          src="https://raw.githubusercontent.com/freelance-nerd/henry-kenyon-photography/main/public/little-henry.png"
          className="w-64 hover:-rotate-12"
        />
        <span className="flex text-sm font-label mt-5">
          Illustration by
          <a href="https://www.instagram.com/edie.woolf/">
            <span className="text-verdant-blue">&nbsp;@edie.woolf</span>
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
