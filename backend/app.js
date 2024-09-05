import express from 'express';
import sqlite from 'better-sqlite3';
import cors from 'cors';

const DUMMY_NEWS = [
  {
    id: 'n1',
    slug: 'how-ai-helps-people',
    title: 'How AI Helps People.',
    image: 'ai-robot.jpg',
    date: '2021-07-01',
    content:
      'Artificial intelligence (AI) is becoming a real game-changer in various aspects of life. In medicine, AI aids in diagnosing diseases by analyzing images with remarkable accuracy.\nIn education, it tailors learning materials to each student, making education more effective. AI simplifies daily tasks, from scheduling to managing smart homes.\nIn business, it streamlines processes and helps make smart decisions. In transportation, AI enhances safety and drives the development of autonomous vehicles. Additionally, it creates personalized recommendations for movies and music. Overall, AI is making our lives more convenient and productive.',
  },
  {
    id: 'n2',
    slug: 'creative-approaches-to-problem-solving',
    title: 'Three Creative Approaches to Problem-Solving',
    image: 'problem-solving.jpg',
    date: '2022-05-01',
    content:
      "Brainstorming is a powerful tool for generating diverse ideas by fostering open, judgment-free thinking. This method helps overcome mental blocks and uncover innovative solutions.\nOne effective approach is Edward de Bono's Six Thinking Hats, which involves examining a problem from different perspectives—facts, emotions, critical analysis, optimism, creativity, and process management. This technique provides a well-rounded view and stimulates varied thinking.\nAnother technique is using random stimuli to inspire fresh ideas. Introducing an unrelated object or word can disrupt conventional thought patterns and lead to new perspectives. For example, connecting a random word to the problem can spark innovative solutions.\nCombining these methods enhances brainstorming, offering unconventional solutions and fostering creativity.",
  },
  {
    id: 'n3',
    slug: 'why-Art-is-important',
    title: 'Why Art is Important',
    image: 'art.jpg',
    date: '2024-03-01',
    content:
      'Art plays a key role in improving the quality of life by influencing emotional and intellectual development. It inspires, helps to make sense of complex life situations, and fosters imagination and creativity.\nEngaging with art—whether through painting, music, theater, or literature—enhances mental health, reduces stress, and promotes emotional resilience.\nAdditionally, art creates a cultural environment that brings people together, strengthening a sense of belonging and social cohesion.',
  },
  {
    id: 'n4',
    slug: 'water-sports',
    title: 'Water Sports Boom',
    image: 'water-sport.jpg',
    date: '2024-01-01',
    content:
      'Water sports are rapidly gaining popularity, turning beaches and rivers into hubs of active recreation. Surfing, kayaking, paddleboarding, water skiing—all these activities not only strengthen the body but also provide a sense of freedom and intense emotions. Water draws people in, and the accessibility of equipment and courses makes water sports easy and enjoyable. Engaging in water activities allows you to forget daily worries while enjoying nature and fresh air. Water sports are a great way to have fun, get an adrenaline rush, and acquire new skills. More and more people are choosing this path to health and enjoyment, making every summer an adventure.',
  },
  {
    id: 'n5',
    slug: 'science-behind-rock-climbers',
    title: 'The Science Behind Rock Climbers',
    image: 'landscape.jpg',
    date: '2022-07-01',
    content:
      'Rock climbing is not only an extreme sport but also an activity that has a significant impact on both the body and mind. The constant physical exertion strengthens muscles, particularly in the forearms, back, and legs, helping climbers maintain excellent physical shape. Additionally, rock climbers develop coordination and balance, as successful ascents require precise body control and synchronized movements.\nInterestingly, rock climbing also stimulates brain neuroplasticity. The process of route selection and problem-solving enhances spatial thinking and planning skills. Furthermore, climbing positively affects the cardiovascular system, strengthening it through increased physical activity.\nIn addition, rock climbing helps reduce stress levels. Studies show that climbing lowers cortisol (the stress hormone) and promotes the production of endorphins, improving mood and reducing anxiety.',
  },
];

const db = sqlite('data.db');

function initDb() {
  db.prepare(
    'CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, title TEXT, content TEXT, date TEXT, image TEXT)'
  ).run();

  const { count } = db.prepare('SELECT COUNT(*) as count FROM news').get();

  if (count === 0) {
    const insert = db.prepare(
      'INSERT INTO news (slug, title, content, date, image) VALUES (?, ?, ?, ?, ?)'
    );

    DUMMY_NEWS.forEach((news) => {
      insert.run(news.slug, news.title, news.content, news.date, news.image);
    });
  }
}

const app = express();

app.use(cors())

app.get('/news', (req, res) => {
  const news = db.prepare('SELECT * FROM news').all();
  res.json(news);
});

initDb();

app.listen(8080);
