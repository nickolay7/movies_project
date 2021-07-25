export default function Filter() {
  return (
    <form action="#" className="filter">
      <p>
        <label>
          <input className="with-gap" name="group1" type="radio" checked/>
          <span>All</span>
        </label>
      </p>
      <p>
        <label>
          <input className="with-gap" name="group1" type="radio"/>
          <span>Movies only</span>
        </label>
      </p>
      <p>
        <label>
          <input className="with-gap" name="group1" type="radio"/>
          <span>Series only</span>
        </label>
      </p>
    </form>
  );
}
