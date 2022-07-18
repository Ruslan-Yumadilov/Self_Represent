import React from 'react';
import Card from "../Card/Card";
import './CardList.css';

export default class CardList extends React.Component {
    static defaultProps = {
      merchList: []
    }
    render() {
        const merchList = [
            {
              "id": 1,
              "title": "Нямушка",
              "pretitle": "Сказочное заморское яство",
              "extract": "с фуа-гра",
              "exrtaCondition": "10 порций мышь в подарок",
              "weight": "0,5",
              "value": "5",
              "selected": "Печень утки разварная с артишоками."
            },
            {
              "id": 2,
              "title": "Нямушка",
              "pretitle": "Сказочное заморское яство",
              "extract": "с рыбой",
              "exrtaCondition": "10 порций мышь в подарок",
              "weight": "2",
              "value": "3",
              "selected": "Головы щучьи с чесноком да свежайшая сёмгушка."
            },
            {
              "id": 3,
              "title": "Нямушка",
              "pretitle": "Сказочное заморское яство",
              "extract": "с курой",
              "exrtaCondition": "10 порций мышь в подарок",
              "weight": "5",
              "value": "0",
              "selected": "Филе из цыплят с трюфелями в бульоне."
            }
          ]
        return (
            <div className={'card-list'}>
                        {
                          merchList.map((merch) => {             
                            return (
                                    <Card
                                        key = {merch.id}
                                        id = {merch.id}
                                        title = {merch['title']}
                                        pretitle = {merch['pretitle']}
                                        extract = {merch['extract']}
                                        exrtaCondition = {merch['exrtaCondition']}
                                        weight = {merch['weight']}
                                        selected = {merch['selected']}
                                        />
                                    )
                            })
                        }
            </div>
                )
    }
}
