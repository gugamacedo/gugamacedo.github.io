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

const gallery = document.querySelector('.gallery')
const buttonSeason = document.querySelectorAll('.buttonSeason')

const allVehicles = [
  {
    name: 'Maxime Renard',
    image: 'maxime-renard.jpg',
    type: 'car'
  },
  {
    name: 'Joshua Koblin',
    image: 'joshua-koblin.jpg',
    type: 'car'
  },
  {
    name: 'Stefan Rodriguez',
    image: 'stefan-rodriguez.jpg',
    type: 'car'
  },
  {
    name: 'Joey Banks',
    image: 'joey-banks.jpg',
    type: 'car'
  },
  {
    name: 'Olav Tvedt',
    image: 'olav-tvedt.jpg',
    type: 'car'
  },
  {
    name: 'Peter Broomfield',
    image: 'peter-broomfield.jpg',
    type: 'car'
  },
  {
    name: 'Toni Zaat',
    image: 'toni-zaat.jpg',
    type: 'car'
  },
  {
    name: 'Kirill Petropavlov',
    image: 'kirill-petropavlov.jpg',
    type: 'motorbike'
  },
  {
    name: 'Max Itin',
    image: 'max-itin.jpg',
    type: 'motorbike'
  },
  {
    name: 'Yulian As',
    image: 'yulian-as.jpg',
    type: 'motorbike'
  },
  {
    name: 'Gijs Coolen',
    image: 'gijs-coolen.jpg',
    type: 'motorbike'
  },
  {
    name: 'Tim Meyer',
    image: 'tim-meyer.jpg',
    type: 'motorbike'
  },
  {
    name: 'Zac Wolff',
    image: 'zac-wolff.jpg',
    type: 'motorbike'
  },
  {
    name: 'Daniel Thurler',
    image: 'daniel-thurler.jpg',
    type: 'motorbike'
  },
  {
    name: 'Esteban Zapata',
    image: 'esteban-zapata.jpg',
    type: 'truck'
  },
  {
    name: 'Giulia Lorenzon',
    image: 'giulia-lorenzon.jpg',
    type: 'truck'
  },
  {
    name: 'Rhys Moult',
    image: 'rhys-moult.jpg',
    type: 'truck'
  },
  {
    name: 'Steve Doig',
    image: 'steve-doig.jpg',
    type: 'truck'
  },
  {
    name: 'Yassine Khalfalli',
    image: 'yassine-khalfalli.jpg',
    type: 'truck'
  },
  {
    name: 'Zetong Li',
    image: 'zetong-li.jpg',
    type: 'truck'
  },
  {
    name: 'Chris Leipelt',
    image: 'chris-leipelt.jpg',
    type: 'jet'
  },
  {
    name: 'John Mcarthur',
    image: 'john-mcarthur.jpg',
    type: 'jet'
  },
  {
    name: 'Jakob Rosen',
    image: 'jakob-rosen.jpg',
    type: 'jet'
  },
  {
    name: 'Timothy Newman',
    image: 'timothy-newman.jpg',
    type: 'jet'
  },
  {
    name: 'Yuri G',
    image: 'yuri-g.jpg',
    type: 'jet'
  },
  {
    name: 'Alina Kacharho',
    image: 'alina-kacharho.jpg',
    type: 'yatch'
  },
  {
    name: 'Danilo Capece',
    image: 'danilo-capece.jpg',
    type: 'yatch'
  },
  {
    name: 'Damian Barczak',
    image: 'damian-barczak.jpg',
    type: 'yatch'
  },
  {
    name: 'Viktor Ritsvall',
    image: 'viktor-ritsvall.jpg',
    type: 'yatch'
  },
  {
    name: 'Eugene Chystiakov',
    image: 'eugene-chystiakov.jpg',
    type: 'yatch'
  },
  {
    name: 'Marcin Ciszewski',
    image: 'marcin-ciszewski.jpg',
    type: 'yatch'
  }
]

function mountCards(vehicles) {
  console.log(gallery)
  gallery.innerHTML = ''
  vehicles.forEach(vehicle => gallery.innerHTML += `<div><img src="img/vehicles/${vehicle['image']}" alt="${vehicle['name']}"><figcaption>Owner: ${vehicle['name']}</figcaption></div>`)
}

function baguncinha(arr) {
  return arr.sort(() => Math.random() - 0.5)
}

mountCards(baguncinha(allVehicles))

buttonSeason.forEach((e) =>
  e.addEventListener('click', () => {
    const vehicles = allVehicles.filter(vehicle => vehicle['type'] === e.value)
    mountCards(e.value !== 'all' ? baguncinha(vehicles) : baguncinha(allVehicles))
  })
)
