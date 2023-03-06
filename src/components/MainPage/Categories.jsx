import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Treadmills",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Elliptical",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Weights",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Fitness Accessories",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Aerobic Training Machines",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Activewear-Women",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Activewear-Men",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Accessories",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Nutrition",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Vitamins & Supplements",
    },
    // {
    //   cateImg: "./images/category/cat11.png",
    //   cateName: "Books",
    // },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
