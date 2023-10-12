 // 定義獲取格式化時間的函式
 function getFormattedTime() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${year}-${month}-${day}T${hours}:${minutes}:00`;
    return formattedTime;
    // 將結果顯示在網頁上
   /* const resultElement = document.getElementById('result');
    resultElement.textContent = `格式化的時間：${formattedTime}`; */
  }