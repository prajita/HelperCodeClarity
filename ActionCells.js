
import React from "react";
import '@cds/core/icon/register.js';
import { ClarityIcons, pencilIcon, trashIcon } from '@cds/core/icon';

ClarityIcons.addIcons(pencilIcon);
ClarityIcons.addIcons(trashIcon);

const Actioncells = props => {
    
    const {colDef} = props;
    const {onCellContextMenu} = colDef;
    const {_id} = props.data;
    return (
      <div >
         <span>
              <cds-icon status="info" shape="pencil"  onClick={ ()=>onCellContextMenu.onClickEditWidget(_id)} ></cds-icon>
          </span>
          <span className="action-cell">
              <cds-icon status="info" shape="trash" onClick={ ()=>onCellContextMenu.onClickDeleteWidget(_id)} ></cds-icon>
          </span>
      </div>
    )
    
  }

  export default Actioncells;
