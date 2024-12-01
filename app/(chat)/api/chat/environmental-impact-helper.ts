import { Message } from 'ai';

// Water Metrics
const ML_OF_WATER_PER_WORD = 519 / 100; // 519 mL Water / 100 words
const COKE_CAN_ML = 380; // 380 mL for standard coke can

// Electricity Metric
const kWh_PER_WORD = 0.14 / 100; // 0.14 kWh / 100 words
const AA_BATTERY_PER_kWh = 1 / 0.0039; // 1 AA battery / 0.0039 kWh
const kWh_PER_LED_HOUR = 0.07 / 7; // 0.07 kWh to power an LED for 7 hours (10 Watt LED)

export function getWordCount(str: string): number {
  // https://stackoverflow.com/questions/18679576/counting-words-in-string
  return str.trim().split(/\s+/).length;
}

export function getWordMessagesCount(messages: Message[]) {
  /**
   * Calculates the length of the `msg.content` for both the
   * Assistant and User roles and returns the sum of the total number of words
   */
  const totalWordCount = messages.reduce((accumulator, msg) => {
    return accumulator + getWordCount(msg.content);
  }, 0);
  return totalWordCount;
}

export function getWaterConversion(wordLen: number) {
  const waterEstimationML = wordLen * ML_OF_WATER_PER_WORD;
  const numCokeCans = waterEstimationML / COKE_CAN_ML;
  return {
    waterEstimationML: waterEstimationML,
    numCokeCans: numCokeCans,
  };
}

export function getElectricityConversion(wordLen: number) {
  // Word to kWh conversion (note kWh is a measure of Joules or Energy)
  // If flowing water is like power, water collected in the bucket is kWh
  const electricityEstimationKWH = wordLen * kWh_PER_WORD;

  // Number of AA batteries store this much kWh
  const numAABateries = electricityEstimationKWH * AA_BATTERY_PER_kWh;

  // Ammount of time a 10W LED can be powered on given a 0.01 kWh energy consumption per hour
  // One LED takes a 0.01 kWh bucket per hour assuming the LED needs 10W to glow
  const numLEDsForOneHour = electricityEstimationKWH / kWh_PER_LED_HOUR;
  return {
    electricityEstimationKWH: electricityEstimationKWH,
    numAABateries: numAABateries,
    numLEDsForOneHour: numLEDsForOneHour,
  };
}
