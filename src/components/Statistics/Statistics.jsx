import PropTypes from 'prop-types';
import css from "./Statistics.module.css";
export const Statistics=(  {
  title,
  stats,
} )=> {
  return( <section class="statisstic">
  {title &&<h2 class="title">{title}</h2>}
  <ul class="stat-list">
   {stats.map(stat => {
   return(
    <li class="item"
    key={stat.id}>
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}%</span>
    </li>
    )})}
    </ul>   
</section>
)}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}; 