const buttonMobile = document.querySelector('#buttonMobile') // id
const menuMobile = document.querySelector('.menuMobile') // class

buttonMobile.addEventListener('click', () => {
  menuMobile.classList.contains('active')
    ? menuMobile.classList.remove('active')
    : menuMobile.classList.add('active')

  buttonMobile.classList.contains('active')
    ? buttonMobile.classList.remove('active')
    : buttonMobile.classList.add('active')
})

const gallery = document.querySelectorAll('.gallery')
const buttonSeason = document.querySelectorAll('.buttonSeason')

const allCharacters = [
  {
    name: 'Holly Flax',
    image: 'holly.jpg',
    seasons: [4, 5, 7]
  },
  {
    name: 'Michael Scott',
    image: 'michael.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7]
  },
  {
    name: 'Jo Benett',
    image: 'jo.jpg',
    seasons: [6, 7]
  },
  {
    name: 'Robert California',
    image: 'robert.jpg',
    seasons: [8]
  },
  {
    name: 'Charles Miner',
    image: 'charles.jpg',
    seasons: [5]
  },
  {
    name: 'Gabe Lewis',
    image: 'gabe.jpg',
    seasons: [6, 7, 8]
  },
  {
    name: 'Karen Filippelli',
    image: 'karen.jpg',
    seasons: [3, 4]
  },
  {
    name: 'Andy Bernard',
    image: 'andy.jpg',
    seasons: [3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: 'Erin Hannon',
    image: 'erin.jpg',
    seasons: [5, 6, 7, 8, 9]
  },
  {
    name: 'Nellie Bertram',
    image: 'nellie.jpg',
    seasons: [8, 9]
  },
  {
    name: 'David Wallace',
    image: 'david.jpg',
    seasons: [2, 3, 4, 5, 6, 9]
  },
  {
    name: 'Clark Green',
    image: 'clark.jpg',
    seasons: [9]
  },
  {
    name: 'Pete Miller',
    image: 'pete.jpg',
    seasons: [9]
  },
  {
    name: 'Dwight Schrute',
    image: 'dwight.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: 'Jim Halpert',
    image: 'jim.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: 'Pam Beesly',
    image: 'pam.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: 'Jan Levinson',
    image: 'jan.jpg',
    seasons: [1, 2, 3, 4, 5]
  },
  {
    name: 'Angela Martin',
    image: 'angela.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: 'Darryl Philbin',
    image: 'darryl.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: 'Ryan Howard',
    image: 'ryan.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: 'Kelly Karpor',
    image: 'kelly.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: 'Roy Anderson',
    image: 'roy.jpg',
    seasons: [1, 2, 3]
  },
  {
    name: 'Oscar Martinez',
    image: 'oscar.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: 'Kevin Malone',
    image: 'kevin.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: 'Stanley Hudson',
    image: 'stanley.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: 'Phyllis Vance',
    image: 'phyllis.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: 'Toby Flenderson',
    image: 'toby.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: 'Creed Bratton',
    image: 'creed.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  {
    name: 'Meredith Palmer',
    image: 'meredith.jpg',
    seasons: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
]

gallery.forEach((e, index) => {
  const seasons = allCharacters.filter(character => character['seasons'].includes(index + 1))
  seasons.forEach(character => e.innerHTML += `<div><img src="img/cast/${character['image']}" alt="${character['name']}"><figcaption>${character['name']}</figcaption></div>`)
})

buttonSeason.forEach((e, index) =>
  e.addEventListener('click', () => {
    gallery.forEach((e) => e.classList.remove('active'))
    gallery[index].classList.add('active')
  })
)
