import style from "./Nutrition.module.scss";

const Nutrition = () => {
  return (
    <section className={`${style.nutrition}`}>
      <h2>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <ul>
        <li>
          <div>Calories</div>
          <div className={`${style.value} bold`}>277kcal</div>
        </li>
        <li>
          <div>Carbs</div>
          <div className={`${style.value} bold`}>0g</div>
        </li>
        <li>
          <div>Protein</div>
          <div className={`${style.value} bold`}>20g</div>
        </li>
        <li>
          <div>Fat</div>
          <div className={`${style.value} bold`}>22g</div>
        </li>
      </ul>
    </section>
  );
};

export { Nutrition };
