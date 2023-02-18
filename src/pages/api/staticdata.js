import { promises as fs } from 'fs';
import path from 'path';

const genresPath = '/music_genres.json';

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(jsonDirectory + genresPath, 'utf8');
  res.status(200).json(fileContents);
}
