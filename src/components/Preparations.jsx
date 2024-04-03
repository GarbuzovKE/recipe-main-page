import style from "./Preparations.module.scss";

const Preparations = () => {
  return (
    <section className={style.preparations}>
      <h2>Preparation time</h2>
      <ul>
        <li>
          <span className="bold">Total: </span>
          Approximately 10 minutes
        </li>
        <li>
          <span className="bold">Preporation: </span>5 minutes
        </li>
        <li>
          <span className="bold">Cooking: </span>5 minutes
        </li>
      </ul>
    </section>
  );
};

export { Preparations };
