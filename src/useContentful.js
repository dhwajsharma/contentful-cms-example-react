import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "yptbrbulqa21",
    accessToken: "92fNTwdlzg8xiaPn65qOQfIpdUe-W8N-ET-P9Pxy7rg",
    host: "preview.contentful.com"
  });

  const getAuthors = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "author",
        select: "fields",
        order: "fields.name"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const avatar = item.fields.avatar.fields;

        return {
          ...item.fields,
          avatar
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors: ${error}`);
    }
  };

  return { getAuthors };
};

export default useContentful;
