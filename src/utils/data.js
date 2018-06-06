import displacementFilterImg from '../../assets/home/displacementFilterHome.jpeg'
import bk_2 from '../../assets/home/home_bk_2.jpeg'
import bk_1 from '../../assets/home/home_bk.jpeg'
// import 16740033 from '../../assets/photography/16740033.jpg'
import alec from '../../assets/photography/alec.jpg'
import cole1 from '../../assets/photography/cole-1.jpg'
import cole2 from '../../assets/photography/cole-2.jpg'
import dash from '../../assets/photography/dash.jpg'
import drum from '../../assets/photography/drum.JPG'
import highwayBurnWood from '../../assets/photography/highway-burn-wood.JPG'
import jenny from '../../assets/photography/jenny.JPG'
import liamBass from '../../assets/photography/liam-bass.JPG'
import lucas from '../../assets/photography/lucas.jpg'
import pioneer1 from '../../assets/photography/pioneer-1.JPG'
import pioneer2 from '../../assets/photography/pioneer-2.JPG'
import snowRailroad from '../../assets/photography/snow-railroad.JPG'
import troy from '../../assets/photography/troy.jpg'
const photoPath = '../../assets/photography/'

const _photo1 = {
  type: 'photo',
  title: 'Iceland #12',
  src: bk_2,
  css_class: '',
  key: '3asdl',
}

const _photo2 = {
  type: 'photo',
  title: 'Iceland #10',
  src: jenny,
  css_class: '',
  key: 'd',
}

const _alec = {
  type: 'photo',
  title: 'Iceland #10',
  src: alec,
  css_class: '',
  key: 'd',
}

const _cole1 = {
  type: 'photo',
  title: 'Iceland #10',
  src: cole1,
  css_class: '',
  key: 'd',
}

const _cole2 = {
  type: 'photo',
  title: 'Iceland #10',
  src: cole2,
  css_class: '',
  key: 'd',
}

const photoProject1 = {
  name: 'Galgo',
  content: [_photo1, _photo2, _alec, _photo2, _photo2, _cole1],
}

const photoProject2 = {
  name: 'Brooklyn Steez',
  content: [
    _photo1,
    _photo2,
    _photo2,
    _cole2,
    _photo1,
    _photo2,
    _photo1,
    _photo2,
    _photo1,

  ],
}
const photoProject3 = {
  name: 'Beautiful People',
  content: [
    _photo1,
    _photo2,
    _photo1,
    _photo2,
  ],
}
export const photographyGridData = [
  photoProject3,
  photoProject3,
  photoProject2,
  photoProject3,
  photoProject3,
  photoProject3,
  photoProject1,
  photoProject1,
  photoProject1,
  photoProject2
]
