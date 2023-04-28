import React from "react";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import Work from "../components/sections/work";

const IndexPage = () => {
  return (
    <main>
      <About />
      {/* <Projects /> */}
      {/* <Work /> */}
      {/* <Freelance /> */}
    </main>
  )
}

export default IndexPage

export const Head = () => <title>AT Bianchi</title>
