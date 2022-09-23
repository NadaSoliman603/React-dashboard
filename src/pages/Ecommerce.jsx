import React, { useEffect, useState } from 'react'
import { Button, SparkLine, Stacked } from './../components';
import { earningData as earningDataEn , medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { useStateContext } from '../context/ContextProvider';
import { earningData as earningDataAr } from '../data/dummyAr';

// const bunerImage = require('../assets/buner.png')
export const Ecommerce = () => {
  const {direction , currentColor} = useStateContext()
  const [earningData , setEarningData] = useState(earningDataEn)
  // let earningData = earningDataEn

  useEffect(()=>{
    if(direction === "rtl"){
      setEarningData(earningDataAr)
    }else{
      setEarningData(earningDataEn)
    }
  },[direction])

  return (
    <div className="pt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">

        <div
          className="pattern bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className='flex justify-between  items-center'>
            <div>
              <p className='font-bold text-gray-300 text-lg'>{direction === "rtl" ? "المكسب" : "Earning"} </p>
              <p className='text-white text-2xl'>1254,595$</p>
            </div>
          </div>

          <div className='mt-2'>
            <Button
              color="white"
              bgColor={currentColor}
              text= {direction === "rtl" ? "تحميل" : "Download"} 
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>


        <div className='flex flex-wrap justify-center gap-1 items-center '>
          {earningData?.map((item) => (
            <div key={item.title}
              className='md:w-56 p-4 pt-0 rounded-2xl    bg-white dark:text-gray-200 dark:bg-secondary-dark-bg'>
              <button
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg
                }}
                className='text-2xl rounded-full p-2 hover:drop-shadow-xl '
                type='button'>
                {item.icon}
              </button>
              <p className='pt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm ml-3 text-${item.pcColor}`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1 '>
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>

      <div className=' mt-4 mb-8 rounded-2xl md:w-780  mx-auto gap-10 bg-white p-4 dark:bg-secondary-dark-bg dark:text-gray-200  '>
        <div className='flex justify-between'>
          <p className='font-smibold text-xl'>{direction === "rtl" ? "تحديث الايرادات" : "ٌٌRevenue  update"}</p>

          <div className='flex items-center gap-4 '>
            <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
              <span><GoPrimitiveDot /></span>
              <span> {direction === "rtl" ?"نفقات" : "ٌٌExpenss"} </span>
            </p>

            <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
              <span><GoPrimitiveDot /></span>
              <span>{direction === "rtl" ?"ميزانية" : "Budget"} </span>
            </p>
          </div>
        </div>

        <div className='mt-10 flex gap-10 flex-wrap justify-center '>
          <div className='border-r-1 border-color m-4 pr-10'>
            <div>
              <p>
                <span className='text-3xl font-semibold'>$485,544</span>
                <span className='p-1.5 hover:drop-shadow-xl cursor-pointer  rounded-full  text-white bg-green-400 ml-3'>25%</span>
              </p>
              <p className='mt-1 text-gray-500 '>{direction === "rtl" ?"ميزانية" : "Budget"} </p>
            </div>

            <div className='mt-8'>
              <p>
                <span className='text-3xl font-semibold'>$485,44</span>
              </p>
              <p className='mt-1 text-gray-500 '>{direction === "rtl" ?"نفقات" : "ٌٌExpense"}</p>
            </div>
            <div className='mt-5'>
              <SparkLine
                currentColor={{currentColor}} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={{currentColor}}
              />
            </div>
            <div className='mt-10'>
              <Button
                color="white"
                bgColor={currentColor}
                text={direction === "rtl" ?"تحميل التقارير" : "Download Report"}
                borderRadius="10px"
                size="md"
              />
            </div>
          </div>
          
          <div>
            <Stacked 
              width={"240px"}
              height={"280px"}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

