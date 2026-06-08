import Header from "./Header.jsx";
import About from "./About.jsx";
import ArticleList from "./ArticleList.jsx";

function App() {
  const posts = [
    {
      id: 1,
      title: "React component composition",
      date: "June 7, 2026",
      preview: "Learn how to build reusable React components using props and children.",
    },
    {
      id: 2,
      title: "Passing props in React",
      date: "June 6, 2026",
      preview: "Props keep your UI declarative and let parent components configure children.",
    },
    {
      id: 3,
      title: "Mapping an array to components",
      date: "June 5, 2026",
      preview: "Use Array.map to render a list of components with unique keys.",
    },
  ];

  return (
    <>
      <Header name="My Tech Blog" />
      <About image="/src/assets/hero.png" about="A simple blog built with React and Vite." />
      <ArticleList posts={posts} />
    </>
  );
}

export default App;
