let array = [];

function clearValue(){
  array = [];
  document.getElementById('inputValue').value = '';
  document.getElementById('preResult').innerHTML = '';
  document.getElementById('result').innerHTML = '';
}

function addValue(){
  let data = parseInt(document.getElementById('inputValue').value.trim());
  array.push(data);
  document.getElementById('inputValue').value = '';
  document.getElementById('preResult').innerHTML = array.toString();
}

function executeQuickSort(){
  if(array.length > 0){
    quickSort(array, 0, array.length - 1);
    document.getElementById('result').innerHTML = array.toString();
  }else{
        alert('there are no data to be sorted');
  }
}

function quickSort(arr, left, right){
  let temp, i = left, j = right;
  let pvt = array[Math.ceil((left + right) / 2)];

  while(i <= j){
    while(array[i] < pvt){
      i++;
    }

    while(array[j] > pvt){
      j--;
    }

    if(i <= j){
      temp = array[i];
      arr[i] = array[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }

  if(left < j){
      quickSort(array, left, j);
  }
  if(i < right){
      quickSort(array, i, right);
  } 
}