const Sort = () => {
  const arr = [1, 11, 99, 55, 77, 22, 44, 66];

  //   버블 정렬 예시
  for (let j = arr.length - 2; j >= 0; j--) {
    for (let i = 0; i <= j; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  const arr2 = [11, 99, 55, 1, 77, 22, 44, 66];
  //   선택 정렬 예시
  for (let j = 0; j < arr2.length - 1; j++) {
    let minIndex = j;
    for (let i = j + 1; i < arr2.length; i++) {
      if (arr2[minIndex] > arr2[i]) {
        minIndex = i;
      }
    }
    const temp = arr2[j];
    arr2[j] = arr2[minIndex];
    arr2[minIndex] = temp;
  }
  console.log(arr2);

  return <>sort</>;
};

export default Sort;
