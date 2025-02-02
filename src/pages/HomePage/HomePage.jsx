import css from "./HomePage.module.css";
import TitleLink from "../../components/TitleLink/TitleLink.jsx";

export default function HomePage() {
  return (
    <div>
      <TitleLink text="The Best Links" />
      <p className={css.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quod
        blanditiis officia ad ea dolor eligendi, temporibus voluptatibus
        recusandae quas similique, voluptatum libero, incidunt odio quibusdam!
        Repudiandae obcaecati tempora nisi odit eos illum aut necessitatibus!
        Laborum saepe soluta quidem ea eligendi iste enim recusandae incidunt
        cupiditate corrupti sed consectetur rem dolor deserunt quos numquam
        nesciunt, repellat mollitia adipisci alias, pariatur odit dicta earum.
        Aliquam aperiam asperiores repudiandae quasi cupiditate itaque maiores
        quo odio quis molestias ea est rerum, et quibusdam non pariatur
        perferendis excepturi placeat nobis officia deserunt sunt necessitatibus
        ab? Sit dolorem nisi earum ad veniam, veritatis officia eius.
      </p>
    </div>
  );
}
