import displacementFilterImg from '../../assets/home/displacementFilterHome.jpeg'
import bk_2 from '../../assets/home/home_bk_2.jpeg'

const photoPath = '../../assets/photography/'

const photo1 = {
  type: 'photo',
  title: 'Iceland #12',
  src: bk_2,
  css_class: '',
  key: '3asdl'
};

const photo2 = {
  type: 'photo',
  title: 'Iceland #10',
  src: displacementFilterImg,
  css_class: '',
  key: 'd'
};

const emptyContainer = {
  type: 'empty',
  css_class: '',
  key: '12309asdf',
  title: 'Empty 2',
}

export const photographyGridData = [
  photo1,
  photo2,
  emptyContainer,
  photo1,
  photo1,
  photo1,
  emptyContainer
  // photo,
  // emptyContainer,
  // photo,
  // emptyContainer
]