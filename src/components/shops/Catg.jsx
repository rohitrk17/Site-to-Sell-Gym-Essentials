import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Gym Accessories",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Gym Essentials",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Fitness Clothing",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Gym Equipment",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Gym Supports",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Gym Suppliments",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Categories </h1>
          <h1>Shop </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
