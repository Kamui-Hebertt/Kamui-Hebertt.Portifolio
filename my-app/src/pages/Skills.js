import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import SideBar from "../components/SideBar";
import providerFile from "../context/contex";
import MenuIcon from "@mui/icons-material/Menu";

function Skills() {
  const {
    loading,
    setloading,
    english,
    openSideBar,
    handleClickBr,
    handleClickEn,
  } = useContext(providerFile);

  useEffect(() => {
    setloading(true);
    let timer1 = setTimeout(() => setloading(false), 1888);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="allContent">
      <div className="menuBar">
        <button onClick={openSideBar}>
          <MenuIcon />
        </button>
      </div>
      <SideBar />
      {loading ? (
        <Loading />
      ) : (
        <>
          {english ? (
            <div className="allSkills">
              <h1 className="titleSkills">Skills And Experinces</h1>
              <div className="container">
                <div className="skills">
                  <div className="col">
                    <h2 className="titulo">Front-End Skills</h2>

                    <ul className="skill">
                      <li>
                        <span className="blueline html"></span>
                        <em className="stack">HTML</em>
                      </li>
                      <li>
                        <span className="blueline css"></span>
                        <em className="stack">CSS</em>
                      </li>
                      <li>
                        <span className="blueline javascript"></span>
                        <em className="stack">ReactJS</em>
                      </li>
                      <li>
                        <span className="blueline php"></span>
                        <em className="stack">Javascript</em>
                      </li>
                      <li>
                        <span className="blueline jquery"></span>
                        <em className="stack">TypeScript</em>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h2 className="titulo">Back-End Skills</h2>

                    <ul className="skill">
                      <li>
                        <span className="blueline node"></span>
                        <em className="stack">Node/Express</em>
                      </li>
                      <li>
                        <span className="blueline sql"></span>
                        <em className="stack">MySql</em>
                      </li>
                      <li>
                        <span className="blueline docker"></span>
                        <em className="stack">Docker</em>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="textSkills">
                  <p className="descriptionSkill">
                    I'm a full-stack web developer, currently working on
                    personal projects and developing projects for TRYBE as
                    student, and also some freelacers jobs. I'm
                    pursuing a bachelor's degree in software engineer. My main
                    stacks are React, Css, Scss, Redux , Context , JavaScript
                    ,Material UI React Router, Figma, styled components, Jest/Unity, GraphiQL,
                    docker, node, Rest Api and more. Feel free to dowload my resume in pdf.
                  </p>
                  <div className="dowloadDiv">
                    <button className="downloadBtn" onClick={handleClickEn}>
                      Download Cv
                    </button>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          ) : (
            <div className="allSkills">
              <h1 className="titleSkills">Habilidades & Experiências</h1>
              <div className="container">
                <div className="skills">
                  <div className="col">
                    <h2 className="titulo">Habilidades de Front-end</h2>

                    <ul className="skill">
                      <li>
                        <span className="blueline html"></span>
                        <em className="stack">HTML</em>
                      </li>
                      <li>
                        <span className="blueline css"></span>
                        <em className="stack">CSS</em>
                      </li>
                      <li>
                        <span className="blueline javascript"></span>
                        <em className="stack">ReactJS</em>
                      </li>
                      <li>
                        <span className="blueline php"></span>
                        <em className="stack">Javascript</em>
                      </li>
                      <li>
                        <span className="blueline jquery"></span>
                        <em className="stack">TypeScript</em>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h2 className="titulo">Habilidades em Back-end</h2>

                    <ul className="skill">
                      <li>
                        <span className="blueline node"></span>
                        <em className="stack">Node/Express</em>
                      </li>
                      <li>
                        <span className="blueline sql"></span>
                        <em className="stack">MySql</em>
                      </li>
                      <li>
                        <span className="blueline docker"></span>
                        <em className="stack">Docker</em>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="textSkills">
                  <p className="descriptionSkill">
                   Sou desenvolvedor web full-stack, atualmente trabalhando em
                     projetos pessoais e desenvolvendo projetos para TRYBE como
                     estudante, e também alguns trabalhos freelancers. Estou
                     cursando bacharel em engenharia de software. Minhas principais stacks são
                      React, Css, Scss, Redux, Context, JavaScript
                     ,Material UI React Router, Figma, styled componets, Jest/Unity, GraphiQL,
                     docker, node, Rest API e muito mais. Fique a vontade para baixar meu curriculo em pdf
                  </p>

                  <div className="dowloadDiv">
                    <button className="downloadBtn" onClick={handleClickBr}>
                      Baixar Currículo
                    </button>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Skills;
