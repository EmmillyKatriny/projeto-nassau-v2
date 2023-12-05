import "./ReadAll.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const itemsMock = [
  {
    _id: "63ee1e0b18f2b9a93da8435a",
    nome: "Rick Sanchez",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    tags: ["Status: Vivo", "Espécie: Humana", "Origem: Terra C-137"],
  },
  {
    _id: "63ef87c74522de2944ab1fa8",
    nome: "Morty Smith",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    _id: "63ef87cc4522de2944ab1fa9",
    nome: "Summer Smith",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
  {
    _id: "63ef87d44522de2944ab1faa",
    nome: "Beth Smith",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },
  {
    _id: "63ef87e24522de2944ab1fab",
    nome: "Jerry Smith",
    imagemUrl: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
  },
];


function ReadAll() {
  
  const [items, setItems] = useState([]);

  // Realizar requisição para backend obtendo a lista de itens
  async function realizarRequisicao() {
    const url = "http://localhost:3000/item";
    const response = await fetch(url);
    const data = await response.json();

    setItems(data);
  }

  
  useEffect(function () {
    realizarRequisicao();
  }, []);

  //   console.log(67, items);

  return (
    <div className="ReadAll">
      {items.map(function (item) {
        // console.log(item);
        // Key -> card-1234
        return <Card key={"card-" + item._id} item={item} />;
      })}
    </div>
  );
}

export default ReadAll;
