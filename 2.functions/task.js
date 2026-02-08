function getArrayParams(...arr) {

  if (arr.length === 0) {
    return { min: null, max: null, avg: null };
  }

  let max = arr[0];
  let min = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];
  }

  const avgLONG = sum / arr.length;
  const avg = +avgLONG.toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );

  return sumWithInitial;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  let x = Math.max(...arr);
  let y = Math.min(...arr);
  let difference = x - y;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  let averageEvenElements = sumEvenElement / countEvenElement;
  let averageShort = +averageEvenElements.toFixed(2);
  return averageShort;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = - Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const currentArr = arrOfArr[i];
    const result = func(...currentArr);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
