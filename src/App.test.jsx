/* global describe, test, expect */
import ReactDOMServer from "react-dom/server.node";
import App from "./App.jsx";
import About from "./About.jsx";
import Article from "./Article.jsx";
import ArticleList from "./ArticleList.jsx";
import Header from "./Header.jsx";

const samplePost = {
  id: 1,
  title: "Test Post",
  date: "June 8, 2026",
  preview: "A test preview text.",
};

describe("App", () => {
  test("renders the correct child components", () => {
    const html = ReactDOMServer.renderToStaticMarkup(<App />);

    expect(html).toContain("<header>");
    expect(html).toContain("<aside>");
    expect(html).toContain("<main>");
  });
});

describe("About", () => {
  test("renders an aside element with a blog logo image and about text", () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <About about="A simple blog built with React and Vite." />
    );

    expect(html).toContain("<aside>");
    expect(html).toContain("alt=\"blog logo\"");
    expect(html).toContain("<p>A simple blog built with React and Vite.</p>");
  });

  test("uses a default image when no image prop is passed", () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <About about="Default image test." />
    );

    expect(html).toContain("src=\"/src/assets/hero.png\"");
  });
});

describe("Article", () => {
  test("renders an article element with title, date, and preview", () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <Article title="Post Title" date="June 8, 2026" preview="Post preview." />
    );

    expect(html).toContain("<article>");
    expect(html).toContain("<h3>Post Title</h3>");
    expect(html).toContain("<small>June 8, 2026</small>");
    expect(html).toContain("<p>Post preview.</p>");
  });

  test("uses a default date when no date prop is passed", () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <Article title="No Date Post" preview="Preview" />
    );

    expect(html).toContain("<small>January 1, 1970</small>");
  });
});

describe("ArticleList", () => {
  test("renders a main element and an Article component for each post", () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <ArticleList posts={[samplePost, { ...samplePost, id: 2, title: "Another Post" }]} />
    );

    expect(html).toContain("<main>");
    expect(html).toContain("<article>");
    expect(html).toContain("<h3>Test Post</h3>");
    expect(html).toContain("<h3>Another Post</h3>");
  });
});

describe("Header", () => {
  test("renders a header element with the blog name", () => {
    const html = ReactDOMServer.renderToStaticMarkup(<Header name="My Tech Blog" />);

    expect(html).toContain("<header>");
    expect(html).toContain("<h1>My Tech Blog</h1>");
  });
});
