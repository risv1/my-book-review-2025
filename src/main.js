import './style.css';
const bookData = [
  {
      id: 1,
      month: 'January',
      isOpen: false,
      book: 'The Bhagavad Gita: Till Chapter 9 (My Choice, Original shifted to November)',
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
      book: 'The Bhagavad Gita: From Chapter 10 to 18 (My Choice, Replaced)',
      author: 'Vedabase\'s translation',
      description: 'A sacred Hindu scripture that explores the nature of duty, righteousness, and the self, offering practical advice on how to live a virtuous life.',
      links: [
          'https://www.amazon.com/Bhagavad-Gita-As-It-Is/dp/0892131349',
          'https://vedabase.io/en/library/bg/'
      ]
  },
  {
      id: 3,
      month: 'March',
      isOpen: false,
      book: 'The Prince (My Choice)',
      author: 'Niccolò Machiavelli',
      description: 'A classic work of political philosophy that explores the nature of power and leadership, offering practical advice on how to acquire and maintain political control.',
      links: [
          'https://www.amazon.com/Prince-Niccol%C3%B2-Machiavelli/dp/B08WZHBPW6?crid=2FR4KDF7VU03C&dib=eyJ2IjoiMSJ9.3pycKEytmG1Esqp8MPLoFqs-4XDaCX4z56bcYIgtJpsWEffAcWmRISEgmniQA1lFcX8jws8FA-_eDyerIeemyX4iRocneegPWpIDewrkzfFecc1_5rKBmi6mZMc8pbS1VxCI4nIwrO7_4c2-vUsFPwiXhr4D-a5GXdvLk1Uv6faacV-f8bM27tE3P3NVHLATiJtSAETqarMBVNMJKHKrN4CZR2vtGPI2AUDOd4kho0c.dXTIvCp5F7us-VGe7Y5KfbTZCn4heAvTDdCzjBl0VAU&dib_tag=se&keywords=the+prince+niccolo+machiavelli&qid=1735499036&s=books&sprefix=the+prince+%2Cstripbooks-intl-ship%2C371&sr=1-1',
          'https://apeiron.iulm.it/retrieve/handle/10808/4129/46589/Machiavelli%2C%20The%20Prince.pdf'
      ]
  },
  {
      id: 4,
      month: 'April',
      isOpen: false,
      book: 'Discourses and Selected Writings',
      author: 'Epictetus',
      description: 'A collection of the teachings of the Stoic philosopher Epictetus, offering practical advice on how to live a virtuous life and cultivate inner peace.',
      links: [
          'https://www.amazon.com/Discourses-Selected-Writings-Penguin-Classics/dp/0140449469',
          "https://ia802309.us.archive.org/2/items/9780140449464/9780140449464.pdf"
      ]
  },
  {
      id: 5,
      month: 'May',
      isOpen: false,
      book: 'The Republic',
      author: 'Plato',
      description: 'A foundational work of Western philosophy that explores the nature of justice, the ideal state, and the role of the philosopher in society.',
      links: [
          'https://www.amazon.com/Republic-Penguin-Classics-Plato/dp/0140455116',
          'https://www.sciencetheearth.com/uploads/2/4/6/5/24658156/plato_-_the_republic.pdf'
      ]
  },
  {
      id: 6,
      month: 'June',
      isOpen: false,
      book: 'Candide (My Choice)',
      author: 'Voltaire',
      description: 'A satirical novella that critiques the philosophy of optimism, exploring themes of suffering, evil, and the nature of human happiness.',
      links: [
          'https://www.amazon.com/Candide-Voltaire/dp/0486266893',
          'https://www.gutenberg.org/files/19942/19942-h/19942-h.htm'
      ]
  },
  {
      id: 7,
      month: 'July',
      isOpen: false,
      book: 'Nicomachean Ethics',
      author: 'Aristotle',
      description: 'A foundational work of Western philosophy that explores the nature of virtue, happiness, and the good life, offering practical advice on how to live a flourishing life.',
      links: [
          'https://www.amazon.com/Nicomachean-Ethics-Hackett-Classics-Aristotle/dp/0872204642',
          'https://www.gutenberg.org/files/8438/8438-h/8438-h.htm'
      ]
  },
  {
      id: 8,
      month: 'August',
      isOpen: false,
      book: 'The Illiad',
      author: 'Homer',
      description: 'An epic poem that tells the story of the Trojan War, exploring themes of heroism, honor, and the nature of fate.',
      links: [
          'https://www.amazon.com/Iliad-Homer/dp/0140275363',
          'https://www.gutenberg.org/cache/epub/6130/pg6130-images.html'
      ]
  },
  {
      id: 9,
      month: 'September',
      isOpen: false,
      book: 'The World as Will and Representation (Felix\'s Choice)',
      author: 'Arthur Schopenhauer',
      description: 'A philosophical work that explores the nature of reality, the will, and the relationship between the individual and the world.',
      links: [
          'https://www.amazon.com/World-Will-Representation-Vol-1/dp/0486217619',
          'https://philocyclevl.wordpress.com/wp-content/uploads/2016/10/schopenhauer-world-as-will-and-representation-1of2.pdf'
      ]
  },
  {
      id: 10,
      month: 'October',
      isOpen: false,
      book: 'Thus Spoke Zarathustra',
      author: 'Friedrich Nietzsche',
      description: 'A philosophical novel that explores the nature of the Übermensch, the eternal recurrence, and the will to power, offering a critique of traditional values and beliefs.',
      links: [
          'https://www.amazon.com/Thus-Spoke-Zarathustra-Modern-Library/dp/0679601752',
          'https://www.gutenberg.org/files/1998/1998-h/1998-h.htm'
      ]
  },
  {
      id: 11,
      month: 'November',
      isOpen: false,
      book: 'Tao Te Ching',
      author: 'Lao Tzu',
      description: 'A fundamental text of Taoism that explores the nature of the Tao and its relationship with virtue, exploring themes of simplicity, spontaneity, and harmony with the universe.',
      links: [
          'https://www.amazon.com/Tao-Te-Ching-Laozi/dp/0060812451',
          'https://docdrop.org/download_annotation_doc/-Perennial-Classics-Lao-Tzu-Stephen-Mitchell---Tao-Te-Ching_-A-New-English-Version-Harper-Perennial-Modern-Classics-2006-2-4--pDMw9.pdf'
      ],
  },
  {
      id: 12,
      month: 'December',
      isOpen: false,
      book: 'Atlas Shrugged (My Choice, I might not finish this)',
      author: 'Ayn Rand',
      description: 'A novel that explores the nature of individualism, capitalism, and the pursuit of self-interest, offering a critique of collectivism and altruism.',
      links: [
          'https://www.amazon.com/Atlas-Shrugged-Ayn-Rand/dp/0451191145',
          'https://www.sarahnamulondo.com/wp-content/uploads/2015/11/atlas-shrugged-ayn-rand.pdf'
      ],
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

