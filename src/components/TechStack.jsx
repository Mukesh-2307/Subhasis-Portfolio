import React from 'react'
import StackIcon from "tech-stack-icons";
import html from '/HTML5.svg';
import css from '/CSS3.svg';
import js from '/JavaScript.svg';
import py from '/Python.svg';
import mySql from '/MySQL.svg';
import java from '/Java.svg';

import pbi from '/power-bi-icon.svg';
import xl from '/microsoft-excel-icon.svg';
import tbl from '/Tableau.svg';
import pl from '/Ploty.svg';

import pds from '/Pandas.svg';
import npy from '/NumPy.svg';
import se from '/Selenium.svg';
import spy from '/Apache Spark.svg';

import win from '/Windows 11.svg';
import lx from '/Linux.svg';

const row1 = [
  { svg: html },
  { svg: css },
  { svg: js },
  { svg: py },
  { svg: mySql },
  { svg: java },
]

const row2 = [
  { svg: pbi },
  { svg: xl },
  { svg: tbl },
  { svg: pl },
]

const row3 = [
  { svg: pds },
  { svg: npy },
  { svg: se },
  { svg: spy },
]

const row4 = [
  { svg: win },
  { svg: lx },
]

const TechStack = () => {
  return (
    <>
      <div className=' flex flex-col gap-10'>
        <TechStackItems techList={row1} />
        <TechStackItems techList={row2} />
        <TechStackItems techList={row3} />
        <TechStackItems techList={row4} />
      </div>
    </>
  )
}

const TechStackItems = ({ techList }) => {
  return (
    <div className=' flex gap-10'>
      {
        techList?.map((icon, index) => {
          return (
            <img src={icon.svg} key={index} alt="tech-stack-icon" className='size-16' />
          )
        })
      }

    </div>
  )
}

export default TechStack