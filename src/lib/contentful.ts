// /src/lib/contentful.ts
import { createClient, Entry } from 'contentful';

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('❌ Missing Contentful environment variables.');
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchWhatWeDoEntries(): Promise<Entry<any>[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'whatWeDo',
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching Contentful entries:', error);
    return [];
  }
}
