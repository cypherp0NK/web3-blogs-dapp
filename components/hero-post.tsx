import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/articles/${slug}`}
              href="/articles/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">
            <div>{excerpt}</div>
            <Avatar name={author.name} picture={author.picture} />

            <div className="flex flex-col lg:flex-row justify-center items-center">
              <a
                href="/articles/exploring-ltc20"
                className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white text-base font-semibold py-1.5 px-6 duration-200 transition-colors mb-6 lg:mb-0"
              >
                Read more
              </a>
              {/* <a href="" className="mx-3 font-bold hover:underline"></a> */}
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
