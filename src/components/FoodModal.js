import React from 'react';
import Modal from 'react-modal';

const FoodModal = (props) => {
    const food = props.selectedFood;
    return (
    <div>
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.closeModal}
            contentLabel="Selected Food"
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">{food['item_name']}</h3>
            
            {food && <div className="modal__body">
                {food['serving_qty']} {food['serving_uom']} of this food has {food['nutrient_value']} {food['nutrient_uom']} ({food['nutrient_name']}).
            </div>}
            <button className="modal__button" onClick={props.closeModal}>Okay</button>
        </Modal>
    </div>
    
)};

export default FoodModal;