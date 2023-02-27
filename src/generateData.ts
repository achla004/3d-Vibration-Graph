export type VibrationSeriesType = {
  [key: string]: Array<[number, number]>;
};

export function generateVibrationData(): VibrationSeriesType {
  let data: VibrationSeriesType = {
    "Event 1": [],
    "Event 2": [],
    "Event 3": [],
    "Event 4": []
  };

  const totalRecords = 1000;
  const maxAmplitude = 5;

  // Generate frequency values for all three series
  let frequencies: number[] = [];
  while (frequencies.length < totalRecords) {
    let frequency = Math.floor(Math.random() * totalRecords * 5);
    if (!frequencies.includes(frequency)) {
      frequencies.push(frequency);
    }
  }
  frequencies.sort((a, b) => a - b);

  // Generate amplitude values for all three series
  let amplitudes1: [number, number][] = [];
  let amplitudes2: [number, number][] = [];
  let amplitudes3: [number, number][] = [];
  let amplitudes4: [number, number][] = [];
  for (let i = 0; i < totalRecords; i++) {
    amplitudes1.push([frequencies[i], Math.random() * maxAmplitude]);
    amplitudes2.push([frequencies[i], Math.random() * maxAmplitude]);
    amplitudes3.push([frequencies[i], Math.random() * maxAmplitude]);
    amplitudes4.push([frequencies[i], Math.random() * maxAmplitude]);
  }

  // Assign amplitude values to respective series
  data["Event 1"] = amplitudes1;
  data["Event 2"] = amplitudes2;
  data["Event 3"] = amplitudes3;
  data["Event 4"] = amplitudes4;

  return data;
}
