/**
 * selects random entry from array
 */

export default function selectRandomEntry<T>(data: Array<T>): T {
  const index = Math.floor(Math.random() * data.length);
  return data[index];
}
