import React from 'react'
import { Header, ChartsHeader, LineChart } from '../../components';

export const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-5 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Line" title="Inflation Rate" />
    <div className="w-full">
      <LineChart />
    </div>
  </div>
  )
}
