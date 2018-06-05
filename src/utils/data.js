import displacementFilterImg from '../../assets/home/displacementFilterHome.jpeg'
import bk_2 from '../../assets/home/home_bk_2.jpeg'
import bk_1 from '../../assets/home/home_bk.jpeg'

const photoPath = '../../assets/photography/'

const photo1 = {
  type: 'photo',
  title: 'Iceland #12',
  src: bk_2,
  css_class: '',
  key: '3asdl',
}

const photo2 = {
  type: 'photo',
  title: 'Iceland #10',
  src: bk_1,
  css_class: '',
  key: 'd',
}

const photoProject3 = {
  name: 'Brooklyn',
  content: [
    photo1,
    photo2,
  ],
}

export const photographyGridData = [
  photoProject3,
  photoProject3,
  photoProject3,
  photoProject3,
  photoProject3,
  photoProject3,
]
