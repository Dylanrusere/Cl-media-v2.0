const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;

// Endpoint to fetch blogs from Muckrack
app.get('/api/blogs', async (req, res) => {
  try {
    // Request the page with Muckrack articles
    const response = await axios.get('https://muckrack.com/tatenda-kanengoni/articles?__cf_chl_tk=7lestvcZ3KLGfx.2czgImhr89uTliZLGRKcHf5MFZuw-1744190330-1.0.1.1-JFxqP3vWkv0AFj92nUVL_vjOPQnqyg0KaATUNGsFj5c');

    // Use Cheerio to parse the page HTML
    const $ = cheerio.load(response.data);

    const articles = [];
    $('.news-story').each((i, el) => {
      const title = $(el).find('.news-story-title a').text().trim();
      const link = 'https://muckrack.com' + $(el).find('.news-story-title a').attr('href');
      const date = $(el).find('.news-story-date').text().trim();
      const source = $(el).find('.news-story-publication').text().trim();

      if (title && link) {
        articles.push({ title, link, date, source });
      }
    });

    // Send the extracted articles as a response
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch articles' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
