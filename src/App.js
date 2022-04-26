import {useState} from 'react'
import './App.css';
import Header from "./components/header";
import Clients from "./components/Clients";
import Employes from "./components/Employes";
import Documents from "./components/Documents";

function App() {

    const [documents, setDocuments] = useState(
        [
            {
                id: 1,
                etatDocument: "DISPONIBLE",
                genreDocument: "CD",
                titre: "harry potter",
                auteur: "JK. Rolling",
                editeur: "maison edition",
                anneePublication: 2000,
                nbrExemplaire: 3,
            }
        ]
    )

    const [employes, setEmployes] = useState(
        [
            {
                id: 1,
                nom: "Sabrina",
                prenom: "Carmier",
                fonction: "GESTIONNAIRE",
            }
        ]
    )

    const [clients, setClients] = useState(
      [
        {
          id: 1,
          nom: "John",
          prenom: "Smith",
          rue: "Daragon",
          ville: "Montreal",
          codePostal: "H05C42",
          numeroTelephone: "514-900-5698",
          dateInscription: "2022/02/20",
        },
        {
          id: 2,
          nom: "Marvin",
          prenom: "Stewart",
          rue: "LaSale",
          ville: "Montreal",
          codePostal: "H05C53",
          numeroTelephone: "514-900-7643",
          dateInscription: "2022/02/22",
        }
      ]
  )
  return (
      <div className='container'>
        <Header/>
          <Clients clients={clients}/>
          <Employes employes={employes}/>
          <Documents documents={documents}/>
      </div>
  );
}

export default App;
