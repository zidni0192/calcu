import InputWithCheckbox from "./components/molecules/inputWithCheckbox";
import './App.css'
import Button from "./components/atoms/button";
import { useState } from "react";
function App() {
  const [hasil, setHasil] = useState('')
  const [angka, setAngka] = useState([])
  const operasi = ['+', "-", "x", '/']

  const handleChanged = (val, key, index) => {
    let tempAngka = [...angka]
    if (!tempAngka[index]) tempAngka[index] = {}
    tempAngka[index][key] = val
    setAngka(tempAngka)
  }

  const handleOperasi = (operasi) => {
    let tempAngka = [...angka].filter(item => item.active)
    const findEmpty = tempAngka.find(item => !item.value || item.value === "")
    if (tempAngka.length < 2) {
      alert("minimal 2 angka yang dichecklist")
    } else if (findEmpty) {
      alert("yang dichecklist inputnya harus diisi angka")
    } else {
      tempAngka = tempAngka.map(item => item.value)
      const _hasil = tempAngka.reduce((a, b) => {
        switch (operasi) {
          case "+":
            return Number(a) + Number(b);
          case "-":
            return Number(a) - Number(b);
          case "x":
            return Number(a) * Number(b);
          case "/":
            return Number(a) / Number(b);
          default:
            return Number(a) + Number(b);
        }
      })
      setHasil(_hasil)
    }
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h1>Calculator</h1>
        {new Array(3).fill(3).map((_, index) => (
          <InputWithCheckbox
            key={index}
            onValueChanged={(value) => handleChanged(value, 'value', index)}
            onCheckChanged={(value) => handleChanged(value, 'active', index)}
          />
        ))}
        <div className="wrapper_buttons">
          {operasi.map((item, key) =>
            <Button key={`${item}-${key}`} text={item} onClick={() => handleOperasi(item)} />
          )}
        </div>
        <hr />
        <div className="wrapper_hasil">
          <div>
            Hasil :
          </div>
          <div>
            {hasil}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
