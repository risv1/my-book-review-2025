type BookData = {
  id: number;
  month: string;
  isOpen: boolean;
  book: string;
  author: string;
  description: string;
  links: string[];
}

const bookData: BookData[] = [
  {
    id: 1,
    month: 'January',
    isOpen: false,
    book: 'The Bhagavad Gita: Till Chapter 9 (Preference, Original shifted to November)',
    author: 'Vedabase\'s translation',
    description: 'A sacred Hindu scripture that explores the nature of duty, righteousness, and the self, offering practical advice on how to live a virtuous life.',
    links: [
      'https://www.amazon.com/Bhagavad-Gita-As-It-Is/dp/0892131349',
      'https://vedabase.io/en/library/bg/'
    ]
  },
  {
    id: 2,
    month: 'February',
    isOpen: false,
    book: 'The Bhagavad Gita: From Chapter 10 to 18 (Replaced)',
    author: 'Vedabase\'s translation',
    description: 'A sacred Hindu scripture that explores the nature of duty, righteousness, and the self, offering practical advice on how to live a virtuous life.',
    links: []
  },
  {
    id: 3,
    month: 'March',
    isOpen: false,
    book: 'The Prince (Free)',
    author: 'Niccolò Machiavelli',
    description: 'A classic work of political philosophy that explores the nature of power and leadership, offering practical advice on how to acquire and maintain political control.',
    links: []
  },
  {
    id: 4,
    month: 'April',
    isOpen: false,
    book: 'Discourses and Selected Writings',
    author: 'Epictetus',
    description: 'A collection of the teachings of the Stoic philosopher Epictetus, offering practical advice on how to live a virtuous life and cultivate inner peace.',
    links: []
  },
  {
    id: 5,
    month: 'May',
    isOpen: false,
    book: 'The Republic',
    author: 'Plato',
    description: 'A foundational work of Western philosophy that explores the nature of justice, the ideal state, and the role of the philosopher in society.',
    links: []
  },
  {
    id: 6,
    month: 'June',
    isOpen: false,
    book: 'Candide (Free)',
    author: 'Voltaire',
    description: 'A satirical novella that critiques the philosophy of optimism, exploring themes of suffering, evil, and the nature of human happiness.',
    links: []
  },
  {
    id: 7,
    month: 'July',
    isOpen: false,
    book: 'Nicomachean Ethics',
    author: 'Aristotle',
    description: 'A foundational work of Western philosophy that explores the nature of virtue, happiness, and the good life, offering practical advice on how to live a flourishing life.',
    links: []
  },
  {
    id: 8,
    month: 'August',
    isOpen: false,
    book: 'The Illiad',
    author: 'Homer',
    description: 'An epic poem that tells the story of the Trojan War, exploring themes of heroism, honor, and the nature of fate.',
    links: []
  },
  {
    id: 9,
    month: 'September',
    isOpen: false,
    book: 'The World as Will and Representation (Free)',
    author: 'Arthur Schopenhauer',
    description: 'A philosophical work that explores the nature of reality, the will, and the relationship between the individual and the world.',
    links: []
  },
  {
    id: 10,
    month: 'October',
    isOpen: false,
    book: 'Thus Spoke Zarathustra',
    author: 'Friedrich Nietzsche',
    description: 'A philosophical novel that explores the nature of the Übermensch, the eternal recurrence, and the will to power, offering a critique of traditional values and beliefs.',
    links: []
  },
  {
    id: 11,
    month: 'November',
    isOpen: false,
    book: 'Tao Te Ching',
    author: 'Lao Tzu',
    description: 'A fundamental text of Taoism that explores the nature of the Tao and its relationship with virtue, exploring themes of simplicity, spontaneity, and harmony with the universe.',
    links: [],
  },
  {
    id: 12,
    month: 'December',
    isOpen: false,
    book: 'Atlas Shrugged (Replaced)',
    author: 'Ayn Rand',
    description: 'A novel that explores the nature of individualism, capitalism, and the pursuit of self-interest, offering a critique of collectivism and altruism.',
    links: [],
  }
]

const app = document.getElementById('app');

const header = document.createElement('h1');
header.textContent = 'Book Review 2025';
app?.appendChild(header);

bookData.forEach((data) => {
  const accordionButton = document.createElement('button');
  accordionButton.classList.add('accordion');
  accordionButton.textContent = data.month;

  const panel = document.createElement('div');
  panel.classList.add('panel');

  const bookInfo = `
  <h3>${data.book}</h3>
  <p><strong>Author:</strong> ${data.author}</p>
  <p><strong>Description:</strong> ${data.description}</p>
  ${data.links.length ? `
    <div class="book-links">
      ${data.links.map(link => `
        <a href="${link}" 
           class="book-link" 
           target="_blank" 
           rel="noopener noreferrer">
           ${new URL(link).hostname.replace('www.', '')}
        </a>
      `).join('')}
    </div>
  ` : '<p><strong>Links:</strong> No links available</p>'}
`;
  panel.innerHTML = bookInfo;

  accordionButton.addEventListener('click', () => {
    const isOpen = panel.style.display === 'block';
    panel.style.display = isOpen ? 'none' : 'block';
  });

  if (app) {
    app.appendChild(accordionButton);
    app.appendChild(panel);
  }

  accordionButton.addEventListener('click', () => {
    const isOpen = panel.classList.contains('show');
    
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('show'));
    document.querySelectorAll('.accordion').forEach(a => a.classList.remove('active'));
    
    if (!isOpen) {
      panel.classList.add('show');
      accordionButton.classList.add('active');
    }
  });
});

