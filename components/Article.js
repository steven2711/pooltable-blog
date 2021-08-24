import marked from "marked";

export default function Article({ frontmatter, content }) {
  const { title, category, date, cover_image, author, author_image, excerpt } =
    frontmatter;

  return (
    <article className="w-full bg-white">
      <div className="flex justify-between items-center mt-4 flex-wrap mb-4">
        <h1 className="text-5xl mb-7">{title}</h1>
        <span>{category}</span>
      </div>

      <img
        src={cover_image}
        alt=""
        className="md:w-1/2 rounded md:float-left mr-10"
      />

      <div className="article-text mt-2">
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>

      <div className="flex justify-between items-center bg-gray-100 p-2">
        <div className="flex items-center">
          <img
            src={author_image}
            alt=""
            className="mx-3 w-10 h-10 object-cover rounded-full sm:block"
          />
          <h4 className="italic">{author}</h4>
        </div>

        <div>{date}</div>
      </div>
    </article>
  );
}
