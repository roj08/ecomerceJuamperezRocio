import './styles/Titulo.css';

const Titulo = ({ titulo }) => {
    
    return (
      <section className="title">
        <div className="title-container">
          <article className="title-container-text">
            <h1>{titulo}</h1>
            <p>
              ¡Los mejores regalos los podes encontrar acá!
              También podes contactarnos para pedirnos algo personalizado
            </p>
          </article>
        </div>
      </section>
    );
  };
  
  export default Titulo;