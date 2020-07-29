import React from "react";
import { Link } from "react-router-dom";
const ListHeroes = ({ heroes }) => {
  if (!heroes.length) {
    return <p className='center'>Нет сохраненных героев</p>;
  }
  return (
    <div className='row'>
      <table className='col s7 offset-s2' >
        <thead>
          <tr>
            <th>№</th>
            <th>Имя</th>
            <th>Редактировать</th>
          </tr>
        </thead>

        <tbody>
          {heroes.map((hero, index) => {
            return (
              <tr key={hero._id}>
                <td>{index + 1}</td>
                <td className="hero_name_item">{hero.dataHero.baseData.name}</td>
                <td>
                  <Link to={`/create/${hero._id}`}>
                    <div className="change_btn">Открыть</div>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListHeroes;
