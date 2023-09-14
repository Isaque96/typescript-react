interface IContadorValorProps {
  contador: number;
}

const contadorValor = (props: IContadorValorProps) => <p>{props.contador}</p>;

export default contadorValor;
