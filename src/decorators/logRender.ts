type Componente = {
  new (...args: any[]): {
    render(): any;
  };
};

export default function logRender<C extends Componente>(componente: C) {
  return class extends componente {
    render() {
      console.log("Renderizando o Componente...");
      const r: any = super.render();
      console.log("Renderização Concluída!");

      return r;
    }
  };
}
