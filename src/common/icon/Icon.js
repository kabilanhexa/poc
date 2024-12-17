import PropTypes from 'prop-types';
import 'boxicons';

import './Icon.scss';

function Icon({ name, type }) {
   return (
      <div className={`icon-container ${type === 'bordered' ? type : ''}`}>
         <i className={`bx bx-${name}`} />
      </div>
   );
}

Icon.propTypes = {
   name: PropTypes.string.isRequired,
   type: PropTypes.oneOf(['bordered']),
};

export default Icon;
