import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Icons from '../../../../components/icons';
import EditIcon from '../../../../components/icons/edit';

const Section = props => {
  const label = props.section.label || props.definition.name;
  const Icon  = Icons[props.definition.icon];

  return (
    <div className="editor-section">
      <div className="editor-section--icon">
        {Icon && <Icon />}
      </div>
      <div className="editor-section--label">
        {label}
      </div>
      <div className="editor-section--actions">
        <Link to={props.editPath}>
          <EditIcon />
        </Link>
      </div>
    </div>
  )
}

export default Section;