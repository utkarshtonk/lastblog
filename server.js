const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Mock data for posts
let posts = [
  {
    id: 1,
    title: 'The Importance of Mindfulness in a Busy World',
    summary: 'In our fast-paced lives, its easy to get caught up in the daily grind and lose sight of the present moment. This post explores the benefits of practicing mindfulness and how it can help you cultivate a sense of calm and clarity amidst the chaos.',
    content: 'Practicing mindfulness can help you stay grounded and present in the midst of a busy world. By focusing on the here and now, you can reduce stress, improve focus, and develop a greater appreciation for the small moments in life. Through meditation, breathwork, and other mindfulness techniques, you can cultivate a sense of inner peace and clarity that will serve you well in all aspects of your life.'
  },
  {
    id: 2,
    title: 'The Power of Gratitude: Transforming Your Life One Day at a Time',
    summary: 'In a world often consumed by negativity, cultivating an attitude of gratitude can be a powerful antidote. This post explores the numerous benefits of practicing gratitude and provides practical tips for incorporating it into your daily routine.',
    content: 'Gratitude is a powerful force that can transform your life in profound ways. By shifting your focus to the positive aspects of your life, you can cultivate a mindset of abundance and appreciation, which can lead to increased happiness, improved mental health, and stronger relationships. This post will provide practical strategies for incorporating gratitude into your daily routine, such as keeping a gratitude journal, expressing appreciation to loved ones, and finding joy in the simple pleasures of life.'
  }
];

app.use(cors());

// GET all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// GET a specific post
app.get('/api/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});