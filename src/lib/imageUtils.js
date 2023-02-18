import { openai } from '@lib/openAIConfig';

const DEFAULT_WIDTH = 165;
const DEFAULT_HEIGHT = 165;

const generateAnImage = async () => {
  const result = await openai.createImage(
    {
      prompt: 'a white siamese cat',
      n: 1,
      size: `${DEFAULT_WIDTH}x${DEFAULT_HEIGHT}`,
    },
    {
      timeout: 5000,
    }
  );

  return result['data'][0]['url'];
};

export { generateAnImage };
