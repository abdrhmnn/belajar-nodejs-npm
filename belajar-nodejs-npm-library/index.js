// folder ini khusus untuk mencoba publish package ke npmjs.com
// jika ingin ignore file/folder yg di publish ke npmjs.com itu masukan kedalam .npmignore
// behaviour nya sama seperti file .gitignore

// untuk update versi tinggal ubah saja version di package.json tapi harus ikutin aturan dari semantic version
// kalo sudah terapin perubahannya dan edit version yg sesuai di package.json
// maka tinggal `npm publish` lagi

export const sayHello = (nama) => {
  return `Hello ${nama}`
}

export const sum = (numbers) => {
  let result = 0
  for(const angka of numbers){
    result += angka;
  }

  return result;
}

export const printArray = (array) => {
  for(let i = 0; i < array.length; i++){
    return `Ini adalah ${array[i]}`
  }
}