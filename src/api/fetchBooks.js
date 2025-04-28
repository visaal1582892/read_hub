export default async function handler(req, res) {
    try {
      const response = await fetch('https://www.freetestapi.com/api/v1/books');
      const data = await response.json();
      res.status(200).json(data); // Send books data to frontend
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).json({ error: 'Failed to fetch books' });
    }
  }
  