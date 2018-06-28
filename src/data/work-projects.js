import airswap_desktop from "../../assets/work/airswap-desktop.png"
import airswap_tablet from "../../assets/work/airswap-tablet.png"
import airswap_mobile from "../../assets/work/airswap-mobile.png"
import airswap_name from '../../assets/work/Airswap.svg'

import stockpile_name from '../../assets/work/Stockpile.png'
import stockpile_index from '../../assets/work/stockpile-index.png'

import artery_name from '../../assets/work/The-Artery.svg'
import artery_desktop from '../../assets/work/artery-desktop.png'
// Template
// { 
//   projectName: "string",
//   description: "string",
//   images: {
//     desktop: ,
//     tablet: ,
//     mobile: ,
//   }
// }


const airswap = {
  projectName: 'Airswap Redesign',
  description: "Redesigning the cryptocurrency Airswap's website prior to the release of their trading platform.",
  images: {
    nameSvg: airswap_name,
    desktop: airswap_desktop,
    tablet: airswap_tablet,
    mobile: airswap_mobile
  }
}

const stockpile = {
  projectName: 'Stockpile FTP',
  description: "Built an internal FTP system with with Angular and Electron",
  images: {
    nameSvg: stockpile_name,
    desktop: stockpile_index,
    tablet: airswap_tablet,
    mobile: airswap_mobile
  }
}

const artery = {
  projectName: 'The-Artery Website',
  description: "Building the portfolio for the creative studio The-Artery",
  images: {
    nameSvg: artery_name,
    desktop: artery_desktop,
    // tablet: airswap_tablet,
    // mobile: airswap_mobile
  }
}

export const workProjectData = [
  airswap,
  artery,
  stockpile
]