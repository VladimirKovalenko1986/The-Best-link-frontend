export default function ArticleView({ article: { topics, text } }) {
  return (
    <article>
      <h2>{topics}</h2>
      <p>{text}</p>
    </article>
  );
}
