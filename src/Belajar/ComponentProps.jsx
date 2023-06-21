//nested component = komponen dalam komponen
//cara ke 1 pake fucntion biasa
function Button(){
  return <button className="h-10 px-6 font-semibold rounded md bg-blue-500 text-white">IYALA</button>
}

//pake cara anon fuction
/*props = argumen/parameter yang bisa di kirim ke komponen lainnya
fungsinya agar kita bisa mengkustomisasi komponen2 yang kita buat*/
const Button2 =(props) =>{
  const {text ="..."}=props//untuk text defaultnya
  //dibawah ini adalah cara menggunakan props
  return <button className={`h-10 px-6 font-semibold rounded md ${props.color} text-black`}>{text}</button>
}

const Button3 =(props) =>{
  const {color ="bg-blue-900", children }=props//untuk text defaultnya
  //dibawah ini adalah cara menggunakan props
  return <button className={`h-10 px-6 font-semibold rounded md ${color} text-black`}>{children}</button>
}

export default function ComponentProps() {
return (
  <>
  <div className="flex justify-center items-center mb-8">
  <h1 className="text-5xl font-bold">anjay</h1></div>
  <div className="flex justify-center items-center gap-x-4">
    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white">button</button>
    <button className="h-10 px-6 font-smibold rounded-md bg-gray-300 text-black">button</button>
    <Button/>
    {/*dibawah ini cara memanggil props yang dikirim dari komponen */}
    <Button2 color="bg-red-500" text="goblog"/>
    <Button2 color="bg-green-500"/>
    <Button3>
      u good <span className="text-purple-500">bro?</span>
    </Button3>
  </div>
  </>
)
}