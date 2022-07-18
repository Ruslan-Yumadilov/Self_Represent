import React from 'react';
import './Card.css';
import cardImg from './card__backgroundImage.png'

export default class Card extends React.Component {
    static defaultProps = {
        id: 0,
        title: '',
        pretitle: '',
        extract: '',
        exrtaCondition: '',
        weight: '',
        selected: ''
    }

    constructor(props) {
        super(props) 
        this.state = {
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState( state => ({
            primaryColor: !state.primaryColor
        }));
}


    render() {
        const {title, pretitle, extract, weight, exrtaCondition, selected} = this.props;
        if(this.state.primaryColor) {
            return(
                <div className={'card__borderMagenta'} onClick={this.handleClick}> 
                <div className={'card'} >
                    <noscript>Вам необходимо включить JavaScript в настройках браузера, чтобы приложение заработало.</noscript>
                    <h2 className={'card__pretitle'}>{pretitle} </h2>
                    <h2 className={'card__title'}>{title} </h2>
                    <h2 className={'card__extract'}>{extract} </h2>
                    <h2 className={'card__exrtaCondition'}>{exrtaCondition} </h2>
                    
                    <div className="card__image">
                        <img src={cardImg} alt='card__backgroundImage'/>
                    </div>
                    <div className='card__weightCircle'>
                        <h2 className={'card__weight'}>{weight}</h2> 
                        <h2 className='card__weightKg'>кг</h2>
                        <h2 className='card__selected'>{selected}</h2>
                    </div>
                </div>
            </div>
            );
    }
        else {
            return(
                <div className={'card__borderBlue'} onClick={this.handleClick}> 
                <div className={'card'} >
                    <noscript>Вам необходимо включить JavaScript в настройках браузера, чтобы приложение заработало.</noscript>
                    <h2 className={'card__pretitle'}>{pretitle} </h2>
                    <h2 className={'card__title'}>{title} </h2>
                    <h2 className={'card__extract'}>{extract} </h2>
                    <h2 className={'card__exrtaCondition'}>{exrtaCondition} </h2>
                    
                    <div className="card__image">
                        <img src={cardImg} alt='card__backgroundImage'/>
                    </div>
                    <div className='card__weightCircle'>
                        <h2 className={'card__weight'}>{weight}</h2> 
                        <h2 className='card__weightKg'>кг</h2>
                        <h2 className='card__notSelected' onClick={this.handleClick}>Чего сидишь? Порадуй котэ, <span ><button className='card__notSelectedBlue' onClick={this.handleClick}>купи</button></span></h2>
                    </div>
                </div>
            </div>
                
            );
        }
    }
}


     
     