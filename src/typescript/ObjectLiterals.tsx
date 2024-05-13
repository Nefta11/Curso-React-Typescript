
interface Person {
  firstName: string,
  lastName: string;
  age: number;
  isAlive?:boolean;
  address: Address;

}
interface Address {
  country: string;
  houseNo: number
}





const ObjectLiterals = () => {

  const person: Person = {
    age: 24,
    firstName: "Neftali",
    lastName: "Hernández",
    isAlive: undefined,
    address: {
      country: "México",
      houseNo: 22
    }
  }
  return (
    <>
      <h3>Objetos Literales</h3>
      <pre>      
        {JSON.stringify(person, null, 2)}
      </pre>
    </>
  )
}

export default ObjectLiterals
