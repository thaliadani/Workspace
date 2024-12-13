import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import "./styles/App.css";

export function App() {
  return (
    <>
      <Navbar />
      
      <section id="articles">
        <Article title="Designing Dashboards" provider="NASA" text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
        <Article />
        <Article />
        <Article />
      </section>
      
    </>
  );
}

