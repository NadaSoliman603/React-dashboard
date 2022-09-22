import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';
import { useStateContext } from '../context/ContextProvider';

export const ColorPicker = () => {
  const { currentMode } = useStateContext();

  const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  };
  const CustomColorPicker = ({ id, mode }) => <ColorPickerComponent    id={id} mode={mode} modeSwitcher={false} inline showButtons={false} change={change} background={currentMode === 'Dark' ? '#33373E' : '#fff'} />;

  return (
<div className="dark:bg-secondary-dark-bg m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Color Picker" />
    <div className=" text-center ">
      <div id="preview"  className=' dark:bg-secondary-dark-bg rounded-full '/>
      <div className="flex justify-center items-center gap-20 flex-wrap dark:bg-secondary-dark-bg ">
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
          <CustomColorPicker id="inline-palette" mode="Palette" />
        </div>
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4 dark:bg-secondary-dark-bg ">Inline Picker</p>
          <CustomColorPicker id="inline-picker" mode="Picker" />
        </div>
      </div>
    </div>
  </div>  )
}
