import Head from "next/head";

//components
import Comments from "../components/Comments";

//data
import { commentsData } from "../data/comments";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Comments App</title>
        <meta
          name="description"
          content="An Interactive Comments Application"
        />
      </Head>

      <Comments comments={commentsData} />
    </div>
  );
}
