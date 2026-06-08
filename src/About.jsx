import defaultLogo from "./assets/hero.png";

function About({ image = defaultLogo, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
