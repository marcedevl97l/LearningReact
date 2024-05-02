//Esto es un componente reutilizable

export function Greeting({ title, name = "User" }) {
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function UserCard(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>${props.amount}</p>
      <p>{props.married ? "married" : "single"}</p>
    </div>
  );
}
