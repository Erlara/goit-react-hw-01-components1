import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
        <section > 
            <h2 className="title">{title}</h2>
            <ul>{stats.map(stat => {
                return <li key={stat.id}>
                    <span>{stat.label}</span>
                    <span>{stat.percentage}%</span>
                </li>
            }) }</ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};