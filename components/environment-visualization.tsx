import React from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import OpacityIcon from '@mui/icons-material/Opacity';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import TungstenIcon from '@mui/icons-material/Tungsten';

type Props = {
  result: any;
};

export default function EnvironmentVisualization({ result }: Props) {
  const wordCount = result.wordCount;

  const waterEstimationML = result.waterImpact.waterEstimationML;
  const numCokeCans = result.waterImpact.numCokeCans;

  const electricityEstimationKWH =
    result.electricityImpact.electricityEstimationKWH;
  const numAABateries = result.electricityImpact.numAABateries;
  const numLEDsForOneHour = result.electricityImpact.numLEDsForOneHour;

  function addCommas(num: string | number){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <div>
      <div
        className={
          'flex flex-col gap-4 rounded-2xl p-4 skeleton-bg max-w-[500px] bg-indigo-900'
        }
      >
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            <RecyclingIcon fontSize="large" />
            <div className="text-2xl font-medium text-blue-50">
              <p>Environmental Impact</p>
            </div>
          </div>
          <div className="text-blue-50">{`Word Count: ${addCommas(wordCount)}`}</div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex-col">
            <div className="text-xl font-medium text-blue-50">
              <p>Water Impact*</p>
            </div>
            <p>
              <OpacityIcon />
              {addCommas(waterEstimationML.toFixed(1))} mL of water used
            </p>
            <p>
              <LocalDrinkIcon />≈ {addCommas(numCokeCans.toFixed(1))} Coke Cans
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex-col">
            <div className="text-xl font-medium text-blue-50">
              <p>Electricity Impact*</p>
            </div>
            <p>
              <FlashOnIcon />
              {addCommas(electricityEstimationKWH.toFixed(2))} kWh
            </p>
            <p>
              <BatteryChargingFullIcon />≈ {addCommas(Math.round(numAABateries))} AA
              Batteries
            </p>
            <p>
              <TungstenIcon />
              Power {addCommas(Math.round(numLEDsForOneHour))} light bulbs for 1 hour
            </p>
          </div>
        </div>

        <small>* Estimated resource consumption, see Learn More for details</small>
        
      </div>
    </div>
  );
}
